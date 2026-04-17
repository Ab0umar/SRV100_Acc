package cc.selrs.app;

import android.app.DownloadManager;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.CookieManager;
import android.webkit.URLUtil;
import android.widget.Toast;

import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(NativePrintPlugin.class);
        super.onCreate(savedInstanceState);

        if (bridge == null || bridge.getWebView() == null) {
            return;
        }

        CookieManager cookieManager = CookieManager.getInstance();
        cookieManager.setAcceptCookie(true);
        cookieManager.setAcceptThirdPartyCookies(bridge.getWebView(), true);

        WebSettings webSettings = bridge.getWebView().getSettings();
        webSettings.setBuiltInZoomControls(false);
        webSettings.setDisplayZoomControls(false);
        webSettings.setMediaPlaybackRequiresUserGesture(false);
        webSettings.setCacheMode(WebSettings.LOAD_DEFAULT);
        bridge.getWebView().setOverScrollMode(View.OVER_SCROLL_NEVER);
        bridge.getWebView().setDownloadListener((url, userAgent, contentDisposition, mimeType, contentLength) -> {
            try {
                DownloadManager.Request request = new DownloadManager.Request(Uri.parse(url));
                String fileName = URLUtil.guessFileName(url, contentDisposition, mimeType);
                String cookies = cookieManager.getCookie(url);

                request.setMimeType(mimeType);
                request.addRequestHeader("User-Agent", userAgent);
                if (cookies != null && !cookies.isEmpty()) {
                    request.addRequestHeader("Cookie", cookies);
                }
                request.setTitle(fileName);
                request.setDescription("Downloading from SELRS");
                request.setNotificationVisibility(DownloadManager.Request.VISIBILITY_VISIBLE_NOTIFY_COMPLETED);
                request.setDestinationInExternalPublicDir(Environment.DIRECTORY_DOWNLOADS, fileName);

                DownloadManager downloadManager = getSystemService(DownloadManager.class);
                if (downloadManager != null) {
                    downloadManager.enqueue(request);
                    Toast.makeText(this, "Download started", Toast.LENGTH_SHORT).show();
                } else {
                    Toast.makeText(this, "Download manager unavailable", Toast.LENGTH_SHORT).show();
                }
            } catch (Exception error) {
                Toast.makeText(this, "Unable to start download", Toast.LENGTH_SHORT).show();
            }
        });

        // Handle back navigation using OnBackPressedDispatcher
        getOnBackPressedDispatcher().addCallback(this, new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (bridge != null && bridge.getWebView() != null && bridge.getWebView().canGoBack()) {
                    bridge.getWebView().goBack();
                } else {
                    setEnabled(false);
                    getOnBackPressedDispatcher().onBackPressed();
                }
            }
        });
    }
}
