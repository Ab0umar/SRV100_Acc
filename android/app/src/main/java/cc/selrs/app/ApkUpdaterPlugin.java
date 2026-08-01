package cc.selrs.app;

import android.app.DownloadManager;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.database.Cursor;
import android.net.Uri;
import android.os.Build;
import android.provider.Settings;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "ApkUpdater")
public class ApkUpdaterPlugin extends Plugin {
    private BroadcastReceiver downloadReceiver;
    private long activeDownloadId = -1;

    @PluginMethod
    public void downloadAndInstall(PluginCall call) {
        String url = call.getString("url");
        if (url == null || url.trim().isEmpty()) {
            call.reject("A valid APK URL is required");
            return;
        }

        Context context = getContext();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O
                && !context.getPackageManager().canRequestPackageInstalls()) {
            Intent permissionIntent = new Intent(
                    Settings.ACTION_MANAGE_UNKNOWN_APP_SOURCES,
                    Uri.parse("package:" + context.getPackageName()));
            permissionIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(permissionIntent);
            resolveStatus(call, "needs_permission");
            return;
        }

        try {
            DownloadManager downloadManager =
                    (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
            if (downloadManager == null) {
                call.reject("Android download manager is unavailable");
                return;
            }

            unregisterDownloadReceiver();
            DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
            request.setTitle("SELRS update");
            request.setDescription("Downloading the latest SELRS version");
            request.setMimeType("application/vnd.android.package-archive");
            request.setNotificationVisibility(
                    DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
            request.setDestinationInExternalFilesDir(
                    context,
                    null,
                    "updates/SELRS-update-" + System.currentTimeMillis() + ".apk");

            activeDownloadId = downloadManager.enqueue(request);
            registerDownloadReceiver(downloadManager);
            resolveStatus(call, "downloading");
        } catch (Exception error) {
            call.reject("Unable to download the SELRS update", error);
        }
    }

    private void registerDownloadReceiver(DownloadManager downloadManager) {
        downloadReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context receiverContext, Intent intent) {
                long completedId = intent.getLongExtra(DownloadManager.EXTRA_DOWNLOAD_ID, -1);
                if (completedId != activeDownloadId) return;

                try {
                    DownloadManager.Query query = new DownloadManager.Query().setFilterById(completedId);
                    try (Cursor cursor = downloadManager.query(query)) {
                        if (cursor == null || !cursor.moveToFirst()) return;
                        int statusColumn = cursor.getColumnIndex(DownloadManager.COLUMN_STATUS);
                        if (statusColumn < 0
                                || cursor.getInt(statusColumn) != DownloadManager.STATUS_SUCCESSFUL) {
                            return;
                        }
                    }

                    Uri apkUri = downloadManager.getUriForDownloadedFile(completedId);
                    if (apkUri == null) return;

                    Intent installIntent = new Intent(Intent.ACTION_VIEW);
                    installIntent.setDataAndType(
                            apkUri,
                            "application/vnd.android.package-archive");
                    installIntent.addFlags(
                            Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_GRANT_READ_URI_PERMISSION);
                    receiverContext.startActivity(installIntent);
                } finally {
                    unregisterDownloadReceiver();
                }
            }
        };

        IntentFilter filter = new IntentFilter(DownloadManager.ACTION_DOWNLOAD_COMPLETE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            getContext().registerReceiver(
                    downloadReceiver,
                    filter,
                    Context.RECEIVER_EXPORTED);
        } else {
            getContext().registerReceiver(downloadReceiver, filter);
        }
    }

    private void unregisterDownloadReceiver() {
        if (downloadReceiver == null) return;
        try {
            getContext().unregisterReceiver(downloadReceiver);
        } catch (IllegalArgumentException ignored) {
            // Receiver was already unregistered by Android.
        }
        downloadReceiver = null;
        activeDownloadId = -1;
    }

    private void resolveStatus(PluginCall call, String status) {
        JSObject result = new JSObject();
        result.put("status", status);
        call.resolve(result);
    }

    @Override
    protected void handleOnDestroy() {
        unregisterDownloadReceiver();
        super.handleOnDestroy();
    }
}
