import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartItem} from "../../app/models/cartItem";
import { MoltinService } from "../../app/services/MoltinService";
import {Product} from "../../app/models/Product";
import {ViewItemPage} from "../view-item/view-item";


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

  }

  ionViewWillEnter() {
    this.items = this.moltServ.getSavedItems()
  }



  viewItem(product: Product) {
    // @ts-ignore
    let item = new CartItem(product.name, product.description, product.pic, product.price.amount);
    this.navCtrl.push(ViewItemPage,{product: item});
  }

  onRemove(item: Product) {
    this.items = this.items.filter((arrayItem) => {
      return arrayItem.id != item.id;
    })
  }

  addToCart(item: Product) {
    this.moltServ.getMoltin().Cart().AddProduct(item.id, 1).then((item) => {
      console.log("Added item with id " + item.id + " to cart");
      this.onRemove(item);
    }).catch((err) => {
      console.log(err);
    });
    this.onRemove(item);
  }



}
