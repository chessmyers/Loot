import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainPage} from "../main/main";

@IonicPage()
@Component({
  selector: 'page-receipt',
  templateUrl: 'receipt.html',
})
export class ReceiptPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  backToShopping() {
    this.navCtrl.popToRoot();
  }


}
