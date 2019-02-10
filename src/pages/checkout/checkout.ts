import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItem } from "../../app/models/cartItem";
import { ReceiptPage } from "../receipt/receipt";
import { MoltinService } from "../../app/services/MoltinService";

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  items: CartItem[];
  tax: number = 3.00;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;

  creditCardNumber: string;
  cardMonth: string;
  cardYear: string;
  cardSecurityCode: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private moltServ: MoltinService) {
    this.items = this.navParams.get('items');
    // this.items = [
    //   new CartItem("Soda", null, "Best ever", 43.99),
    //   new CartItem("Bread", null, "yum", 23.33),
    //   new CartItem("Pizza", null, "Pineapple and bacon", 32.43)
    // ]
  }

  getPrice() {
    let total: number = 0;
    for (let item of this.items) {
      total += item.price;
    }
    return total;
  }

  onCompletePurchase() {
    let customer = {
      email: this.email,
      name: (this.firstName + " " + this.lastName)
    };
    let address = {
      first_name: this.firstName,
      last_name: this.lastName,
      line_1: this.address,
      line_2: this.city,
      county: this.state,
      postcode: this.zip,
      country: this.country
    };
    let paymentInfo = {
      gateway: 'stripe',
      method: 'purchase',
      first_name: this.firstName,
      last_name: this.lastName,
      number: this.creditCardNumber,
      month: this.cardMonth,
      year: this.cardYear,
      verification_value: this.cardSecurityCode
    };
    this.moltServ.checkOut(customer, address).then((order) => {
      console.log(order);
      this.moltServ.makePayment(order.data.id, paymentInfo).then(() => {
        this.navCtrl.push(ReceiptPage);
      })
    }).catch((err) => {
      console.log(err);
    })
    this.navCtrl.push(ReceiptPage);
  }
}
