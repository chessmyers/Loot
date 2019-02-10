import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from "../../app/models/cartItem";


@IonicPage()
@Component({
  selector: 'page-view-item',
  templateUrl: 'view-item.html',
})
export class ViewItemPage {

  item: CartItem = new CartItem("","","","", "");

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('product');
    console.log(this.item);
  }



}
