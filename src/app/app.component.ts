import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  url: any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public iab: InAppBrowser) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      statusBar.hide();
      // statusBar.overlaysWebView(false);
      splashScreen.hide();

      if (platform.is('ios')) {
        this.url = 'https://contamin8.com/?app=ios&v=0.1';
        let browser = this.iab.create(this.url, '_target', 'location=no,toolbar=no,allowInlineMediaPlayback=yes');
      }
      else {
        this.url = 'https://contamin8.com/?app=android&v=0.1';
      }
    });
  }
}

