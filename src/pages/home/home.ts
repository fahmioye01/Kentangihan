import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryPage } from '../history/history';
import { MenuPage } from '../menu/menu';
import { PesanPage } from '../pesan/pesan';
import { AboutPage } from '../about/about';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  pesan() {
    this.navCtrl.push(PesanPage);
  }
  
  
  histori(){
    this.navCtrl.push(HistoryPage);
    
  }
  menuPage(){
    this.navCtrl.push(MenuPage)
  }
  aboutPage(){
    this.navCtrl.push(AboutPage)
  }

}
