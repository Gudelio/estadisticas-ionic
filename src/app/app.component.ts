import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {  
    this.initializeApp();
}

initializeApp() {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);

    }

// initializeApp() {
//  if (Capacitor.isNativePlatform()) {
//    StatusBar.setStyle({ style: Style.Light });
//   SplashScreen.hide();
//    }

}