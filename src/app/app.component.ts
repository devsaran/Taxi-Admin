import { Component, NgZone } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { AvatarService } from './services/avatar.service';
import { StatusBar, Style } from '@capacitor/status-bar';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: 'home', icon: 'home', color: 'primary' },
    { title: 'All Trips', url: 'history', icon: 'cellular', color: 'primary' },
    { title: 'Drivers ', url: 'drivers', icon: 'car', color: 'primary' },
    { title: 'Riders  ', url: 'customers', icon: 'person', color: 'primary' },
    { title: 'CarTypes', url: 'cartypes', icon: 'car', color: 'primary' },
    { title: 'Prices', url: 'prices', icon: 'cash', color: 'primary' },
    { title: 'Documents', url: 'documents', icon: 'clipboard', color: 'primary' },
    { title: 'Live Support', url: 'support', icon: 'chatbubbles', color: 'primary' },
    { title: 'Payout', url: 'payout', icon: 'diamond', color: 'primary' },
    { title: 'Rider App ', url: 'rider-app', icon: 'phone-portrait', color: 'primary' },
    { title: 'Driver App ', url: 'driver-app', icon: 'phone-landscape', color: 'primary' },
  ];
  auth: any;
  constructor(public avatar: AvatarService, private platform: Platform, private nav: NavController) {
    this.initialize()
  }

  async initialize() {

    console.log(this.avatar);
    
    this.platform.ready().then(async (readySource) => {
      console.log('Platform ready from', readySource);
     
      await StatusBar.setBackgroundColor({color: '#5238ff'})
      await this.LoadSplash();

      });
  }

  async LoadSplash(){
    await SplashScreen.show();

    await StatusBar.setOverlaysWebView({ overlay: true });
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addListener((mediaQuery) => this.toggleDarkTheme(mediaQuery.matches));
 
     this.toggleDarkTheme(prefersDark.matches);

    await StatusBar.setOverlaysWebView({ overlay: true });
  }

  toggleDarkTheme(shouldAdd) {
    if (shouldAdd){
      StatusBar.setStyle({ style: Style.Dark });
    }else{
     StatusBar.setStyle({ style: Style.Light });
    }
  }

  gotoProfile(){
    this.nav.navigateForward('profile');
  }

  gotoPage(p){
    this.nav.navigateForward(p);
  }

  
}
