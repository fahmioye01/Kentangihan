import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, _getAngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
  
  //arrData = []
 
 nota1 : AngularFirestoreCollection<any> = this.db.collection('nota');
  nota2 = this.nota1.valueChanges();
  constructor(public navCtrl: NavController, public navParams: NavParams, private db:AngularFirestore) {
    /*this.db.collection("nota").valueChanges().subscribe(_data =>{
      this.arrData = _data;
      console.log(this.arrData);
    }); */
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  hapus(nota){
    this.nota1.doc(nota.nota4).delete().then(() => {
      console.log('deleted');
    }
    )}
    
  
}
