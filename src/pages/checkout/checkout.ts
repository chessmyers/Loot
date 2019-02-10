import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from "../../app/models/cartItem";
import { ReceiptPage } from "../receipt/receipt";

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  items: CartItem[];
  tax: number = 3.00;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      new CartItem("Soda", null, "Best ever", 43.99),
      new CartItem("Bread", null, "yum", 23.33),
      new CartItem("Pizza", null, "Pineapple and bacon", 32.43)
    ]
  }

  getPrice() {
    let total: number = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }

  onCompletePurchase() {
    this.navCtrl.push(ReceiptPage);
  }
}
