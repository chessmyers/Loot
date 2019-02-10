import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from "../../app/models/category";
import { MainPage } from "../main/main";

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories: Category[];
  mainPage: any = MainPage;

  anything: boolean = true;
  shirts: boolean = false;
  shoes: boolean = false;
  socks: boolean = false;
  accessories: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [
      new Category("Shoes"),
      new Category("Socks"),
      new Category("Shirts"),
      new Category("Accessories"),
      new Category("Pants")
    ];
  }

  next() {
    this.navCtrl.setRoot(this.mainPage);

  }



}
