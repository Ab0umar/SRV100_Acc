param(
    [string]$VersionName,
    [int]$VersionCode,
    [switch]$SkipWebBuild,
    [switch]$SkipCapSync,
    [string]$ApkOutputDir,
    [switch]$DryRun,
    [switch]$Bundle
)

$ErrorActionPreference = "Stop"

# إعداد المسارات الأساسية
$repoRoot = Split-Path -Parent $PSScriptRoot
$packageJsonPath = Join-Path $repoRoot "package.json"
$androidDir = Join-Path $repoRoot "android"

# المسار الافتراضي للنسخ (OneDrive)
$defaultDestination = "C:\Users\drels\OneDrive\SELRS.cc"
$resolvedDestDir = if ($ApkOutputDir) { $ApkOutputDir } else { $defaultDestination }

$maxAndroidVersionCode = 2100000000

function Write-Step {
    param([string]$Message)
    Write-Host ""
    Write-Host "==> $Message" -ForegroundColor Cyan
}

function Assert-Command {
    param([string[]]$Names)
    foreach ($Name in $Names) {
        if (-not (Get-Command $Name -ErrorAction Ignore)) {
            throw "Required command '$Name' was not found in PATH."
        }
    }
}

function Save-PackageJson {
    param(
        [string]$Path,
        [object]$Object
    )
    $json = $Object | ConvertTo-Json -Depth 100
    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($Path, "$json`n", $utf8NoBom)
}

if (-not (Test-Path $packageJsonPath)) {
    throw "package.json not found at $packageJsonPath"
}

Assert-Command "pnpm", "npx", "java"

# 1. قراءة وتحديد الإصدار
$packageJsonObj = Get-Content -Raw $packageJsonPath | ConvertFrom-Json
$projectVersion = [string]$packageJsonObj.version
$semverPattern = '^\d+\.\d+\.\d+$'

if ($projectVersion -notmatch $semverPattern) {
    throw "package.json version '$projectVersion' is not in expected x.y.z format."
}

if (-not $PSBoundParameters.ContainsKey("VersionName") -or [string]::IsNullOrWhiteSpace($VersionName)) {
    $parts = $projectVersion -split '\.'
    $parts[2] = [int]$parts[2] + 1
    $VersionName = $parts -join '.'
}

# تحديث package.json
if ($projectVersion -ne $VersionName) {
    Write-Step "Updating version: $projectVersion → $VersionName"
    $packageJsonObj.version = $VersionName
    if (-not $DryRun) {
        Save-PackageJson -Path $packageJsonPath -Object $packageJsonObj
    }
}

# حساب الـ VersionCode
if (-not $PSBoundParameters.ContainsKey("VersionCode")) {
    $parts = $VersionName -split '\.'
    $VersionCode = ([int]$parts[0] * 1000000) + ([int]$parts[1] * 10000) + [int]$parts[2]
}

if ($VersionCode -gt $maxAndroidVersionCode) {
    throw "VersionCode ($VersionCode) exceeds the Android maximum limit of $maxAndroidVersionCode."
}

Write-Step "Building Android release"
Write-Host "VersionName: $VersionName"
Write-Host "VersionCode: $VersionCode"

Push-Location $repoRoot
try {
    if (-not $SkipWebBuild) {
        Write-Step "Running web build"
        if (-not $DryRun) { pnpm build }
    }

    if (-not $SkipCapSync) {
        Write-Step "Syncing Capacitor"
        if (-not $DryRun) { npx cap sync android }
    }

    Push-Location $androidDir
    try {
        $gradleTask = if ($Bundle) { "bundleRelease" } else { "assembleRelease" }
        Write-Step "Running Gradle $gradleTask"
        $env:APP_VERSION_CODE = [string]$VersionCode
        if (-not $DryRun) {
            .\gradlew $gradleTask "-PversionCode=$VersionCode"
        }
    }
    finally { Pop-Location }
}
finally { Pop-Location }

if ($Bundle) {
    # Play Console upload (.aab) — signed with the same release keystore as assembleRelease
    Write-Step "Finalizing AAB"
    $gradleBundleDir = Join-Path $androidDir "app\build\outputs\bundle\release"
    $bundleFile = Get-ChildItem -Path $gradleBundleDir -Filter "*.aab" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

    if ($bundleFile) {
        $newBundleName = "SELRS_$VersionName.aab"
        $copiedBundlePath = Join-Path $resolvedDestDir $newBundleName

        if (-not $DryRun) {
            if (-not (Test-Path $resolvedDestDir)) {
                New-Item -ItemType Directory -Path $resolvedDestDir -Force | Out-Null
            }
            Write-Host "Source: $($bundleFile.FullName)"
            Write-Host "Dest:   $copiedBundlePath"
            Copy-Item -Path $bundleFile.FullName -Destination $copiedBundlePath -Force
            Write-Host "Successfully generated: $newBundleName (upload this to Play Console)" -ForegroundColor Green
        }
        else {
            Write-Host "DryRun: AAB would be saved as '$newBundleName' in '$resolvedDestDir'." -ForegroundColor Yellow
        }
    }
    else {
        Write-Host "AAB not found. Check Gradle logs." -ForegroundColor Red
    }
}
else {
    # 2. تسمية الملف النهائي بنظام SELRS + VersionName
    Write-Step "Finalizing APK"
    $gradleApkDir = Join-Path $androidDir "app\build\outputs\apk\release"
    $apkFile = Get-ChildItem -Path $gradleApkDir -Filter "*.apk" | Sort-Object LastWriteTime -Descending | Select-Object -First 1

    if ($apkFile) {
        # تعديل الاسم هنا ليصبح SELRS_1.0.115.apk مثلاً
        $newApkName = "SELRS_$VersionName.apk"
        $copiedApkPath = Join-Path $resolvedDestDir $newApkName

        if (-not $DryRun) {
            if (-not (Test-Path $resolvedDestDir)) {
                New-Item -ItemType Directory -Path $resolvedDestDir -Force | Out-Null
            }

            # تنفيذ النسخ مع تغيير الاسم
            Write-Host "Source: $($apkFile.FullName)"
            Write-Host "Dest:   $copiedApkPath"
            Copy-Item -Path $apkFile.FullName -Destination $copiedApkPath -Force

            # Also copy to android/releases/ so the server can serve it for auto-updates
            $localReleasesDir = Join-Path $androidDir "releases"
            if (-not (Test-Path $localReleasesDir)) {
                New-Item -ItemType Directory -Path $localReleasesDir -Force | Out-Null
            }
            $localApkPath = Join-Path $localReleasesDir $newApkName
            Copy-Item -Path $apkFile.FullName -Destination $localApkPath -Force
            Write-Host "Also copied to: $localApkPath (served at /updates/android)" -ForegroundColor Green

            Write-Host "Successfully generated: $newApkName" -ForegroundColor Green
        }
        else {
            Write-Host "DryRun: APK would be saved as '$newApkName' in '$resolvedDestDir'." -ForegroundColor Yellow
        }
    }
    else {
        Write-Host "APK not found. Check Gradle logs." -ForegroundColor Red
    }
}

Write-Step "Process Complete"