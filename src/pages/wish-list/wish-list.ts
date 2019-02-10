import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartItem} from "../../app/models/cartItem";
import { MoltinService } from "../../app/services/MoltinService";
import {Product} from "../../app/models/Product";


@IonicPage()
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html',
})
export class WishListPage {

  items: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private moltServ: MoltinService) {
    // this.items = [
    //   new CartItem("Soda", null, "Best ever", 43.99),
    //   new CartItem("Bread", null, "yum", 23.33),
    //   new CartItem("Pizza", null, "Pineapple and bacon", 32.43)
    // ]

    this.items = this.moltServ.getSavedItems()
  }



  viewItem() {

  }



}
