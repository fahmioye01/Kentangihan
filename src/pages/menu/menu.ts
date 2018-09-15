import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
/*import { tambahMenu } from '../../model/tambahMenu/tambahMenu';*/

import { AngularFireDatabase } from 'angularfire2/database';

import { PesanPage } from '../pesan/pesan';





/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
 
namaMenu;
hargaMenu : number ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public alertCtrl: AlertController,private db : AngularFireDatabase ) {
     
  }

  addtambahMenu(menu,harga){
    this.db.list("/menu").push({ 
      menu : this.namaMenu,
      harga : this.hargaMenu 

      
    });  console.log(this.namaMenu,this.hargaMenu)
  
  }

  /*addtambahMenu(tambahMenu: tambahMenu){
    this.menu.addtambahMenu(tambahMenu).then(ref => {
      console.log(ref.key);
    });
    
  }*/

}
