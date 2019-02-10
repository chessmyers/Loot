import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from "../../app/models/cartItem";
import { CheckoutPage } from "../checkout/checkout";
import { MoltinService } from "../../app/services/MoltinService";
import {ViewItemPage} from "../view-item/view-item";


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  items: CartItem[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private moltServ: MoltinService) {
    // this.items = [
    //   new CartItem("Hot Dogs", null, "The best dogs on the planet", 99.22),
    //   new CartItem("Hamburgers", null, "Yumm", 43.33),
    //   new CartItem("Fries", null, "Salty and good", 12.43)
    // ]
  }

  ionViewWillLoad() {
    this.moltServ.getMoltin().Cart().Items().then((items) => {
      items.data.forEach((item) => {
        let cartItem = new CartItem(item.name, item.description, item.image.href, item.unit_price.amount);
        this.items.push(cartItem);
      })
    })
  }


  onCheckout() {
    this.navCtrl.push(CheckoutPage);
  }

  viewItem(product: CartItem) {
      console.log({product});
      this.navCtrl.push(ViewItemPage, {product: product});
  }




}
