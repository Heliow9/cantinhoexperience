package com.loretoemanoel.libsm10;

import android.os.Build;
import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

import expo.modules.ReactActivityDelegateWrapper;

import com.loretoemanoel.libsm10.Pix4.Pix4Service;
import com.facebook.react.ReactActivity;

import com.loretoemanoel.libsm10.NFCE.It4r;

import android.content.Context;
import android.content.pm.PackageManager;
import android.os.Bundle;

import android.app.Activity;
import android.util.Log;
import android.widget.Toast;

import br.com.daruma.framework.mobile.DarumaMobile;

public class MainActivity extends ReactActivity {

  Activity activity;
  public static Printer printer;
  public static PayGo payGo;
  public static ServiceSat serviceSat;
  public static Balanca balanca;
  public static BridgeService bridge;
  public static It4r it4rObj;
  public static Context mContext;
  public static Pix4Service pix4Service;
  public static KioskService kioskService;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    // Set the theme to AppTheme BEFORE onCreate to support 
    // coloring the background, status bar, and navigation bar.
    // This is required for expo-splash-screen.
    setTheme(R.style.AppTheme);
    super.onCreate(null);

    activity = this;

    printer = new Printer(activity);
    payGo = new PayGo(activity);
    serviceSat = new ServiceSat(activity);
    balanca = new Balanca(activity);
    bridge = new BridgeService(activity);
    it4rObj = new It4r(DarumaMobile.inicializar(this, "@FRAMEWORK(LOGMEMORIA=200;TRATAEXCECAO=TRUE;TIMEOUTWS=8000;SATNATIVO=FALSE);@SOCKET(HOST=192.168.210.94;PORT=9100;)"));
    pix4Service = new Pix4Service(activity);
    kioskService = new KioskService(activity);
  }

  /**
   * Returns the name of the main component registered from JavaScript.
   * This is used to schedule rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "main";
  }

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegateWrapper(this, BuildConfig.IS_NEW_ARCHITECTURE_ENABLED, new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled()));
  }

  /**
   * Align the back button behavior with Android S
   * where moving root activities to background instead of finishing activities.
   * @see <a href="https://developer.android.com/reference/android/app/Activity#onBackPressed()">onBackPressed</a>
   */
  @Override
  public void invokeDefaultOnBackPressed() {
    if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R) {
      if (!moveTaskToBack(false)) {
        // For non-root activities, use the default implementation to finish them.
        super.invokeDefaultOnBackPressed();
      }
      return;
    }

    // Use the default back button implementation on Android S
    // because it's doing more than {@link Activity#moveTaskToBack} in fact.
    super.invokeDefaultOnBackPressed();
  }
}
