import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.stpsh.empleoshidalgo',
  appName: 'Estadísticas STPSH',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      showSpinner: false,
      launchAutoHide: false,
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP"
    }
  },
};

export default config;
