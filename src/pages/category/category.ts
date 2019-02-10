import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Category } from "../../app/models/category";
import { MainPage } from "../main/main";
import  { Categories } from "../../app/models/Categories";
import { MoltinService } from "../../app/services/MoltinService";

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories: Category[];
  mainPage: any = MainPage;

  anything: boolean = true;
  clothing: boolean = false;
  shoes: boolean = false;
  socks: boolean = false;
  accessories: boolean = false;
  food: boolean = false;
  notFood: boolean = false;
  electronics: boolean = false;
  bags: boolean = false;
  kitchenAppliances: boolean = false;
  furnitureHomeDeco: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, private moltServ: MoltinService) {
    this.categories = [
      new Category("Shoes"),
      new Category("Socks"),
      new Category("Shirts"),
      new Category("Accessories"),
      new Category("Pants")
    ];
  }

  next() {
    let cat = new Categories(this.anything, this.clothing, this.shoes, this.socks, this.accessories, this.food, this.notFood,
              this.electronics, this.bags, this.kitchenAppliances, this.furnitureHomeDeco);
    this.moltServ.setCategories(cat);
    this.navCtrl.setRoot(this.mainPage);

  }



}
