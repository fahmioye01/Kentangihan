import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  items: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  nextPage() {
    
    console.log('ionViewDidLoad AboutPage');
  }

}
