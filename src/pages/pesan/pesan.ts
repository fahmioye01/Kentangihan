import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

import { HistoryPage } from '../history/history';

import { MenuPage } from '../menu/menu';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the PesanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-pesan',
  templateUrl: 'pesan.html',
})
export class PesanPage {
  
  
  
  arrMenu = []
  nama;
  barbe = 0  ; 
  keju = 0 ;
  bp = 0;
  rendang = 0;
  jumlah : number;
  myDate: String = new Date().toISOString();

  nota1 : AngularFirestoreCollection<any> = this.db.collection('nota');
  nota2 = this.nota1.valueChanges();
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public Alert : AlertController ,private db: AngularFirestore) {
    /*this.db.list("menu").valueChanges().subscribe(_data =>{
      this.arrMenu = _data;
      console.log(this.arrMenu);
    });*/
    
  }

  coba() {
    var a = this.barbe  ; 
    var b = this.keju ; 
    var c = this.bp ; 
    var d = this.rendang ; 
    this.jumlah = (a * 15000) + (b * 15000) + (c * 15000) + (d * 15000)  ;

    let alert = this.Alert.create({
      title: 'Validasi',
      message: '<h6>Rendang :</h6>' + d + '<h6>Barbeque :</h6>' + a +'<h6>Keju :</h6>' + b +'<h6>BlackPepper :</h6>' + c +'<h5>Nama :</h5>' + this.nama + '<h5>Harga :</h5>' + this.jumlah ,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => { 
            this.navCtrl.push(HistoryPage);

            this.db.collection('nota').add(
            {nama : this.nama ,
            rendang : this.rendang,
            barbe : this.barbe,
            keju : this.keju,
            bp : this.bp,
            jumlah : this.jumlah,
            myDate : this.myDate}).then((doc) => {
              this.nota1.doc(doc.id).update({
                nota4: doc.id
              })
            })
         
              .catch((err) => {
              console.log(err);
            })
          
         console.log(this.jumlah,this.db,this.myDate);
            console.log('masuk');
          }
        }
      ]
    });
    alert.present();
  }
  
  private increment () {
    this.barbe++;
    
  }
  
  private decrement () {
    this.barbe--;
   
  }
  private tambahRendang () {
    this.rendang++;
    
  }
  
  private kurangRendang () {
    this.rendang--;
   
  }
  private tambahKeju () {
    this.keju++;
    
  }
  
  private kurangKeju () {
    this.keju--;
   
  }
  private tambahBp () {
    this.bp++;
    
  }
  
  private kurangBp () {
    this.bp--;
   
  }
  /*tambahPesan(nama,jumlah,myDate){
    var a = parseInt(this.barbe); 
    var b = parseInt(this.keju); 
    var c = parseInt(this.bp); 
    var d = parseInt(this.rendang); 

    this.jumlah = (a + b + c + d) * 15000 ;
    this.db.list("/nota").push(
      {nama : this.nama ,
      jumlah : this.jumlah,
      myDate : this.myDate});
    
    
   console.log(this.jumlah,this.db,this.myDate);
  }*/

  
}
