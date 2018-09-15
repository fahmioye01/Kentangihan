import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoryPage } from '../pages/history/history';
import { MenuPage } from '../pages/menu/menu';
import { PesanPage } from '../pages/pesan/pesan';
import { AboutPage } from '../pages/about/about';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFirestoreModule } from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyBpDPKZI9YiGS46ZJDnmplJXgS-IemTZZo",
  authDomain: "nota-96c54.firebaseapp.com",
  databaseURL: "https://nota-96c54.firebaseio.com",
  projectId: "nota-96c54",
  storageBucket: "nota-96c54.appspot.com",
  messagingSenderId: "176791570945"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoryPage,
    MenuPage,
    PesanPage,
    AboutPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()
    
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoryPage,
    MenuPage,
    PesanPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
  ]
})
export class AppModule {}
