import { gateway as MoltinGateway } from '@moltin/sdk';
import {Product} from "../models/Product";
import {Categories} from "../models/Categories";

export class MoltinService {

  Moltin = MoltinGateway({
    client_id: 'VHWHr6RuM0RpnyRL86tgFGphC9XlbswiEnodYiXGEO'
  });

  savedItems: Product[] = [];
  categories: Categories;

  getMoltin() {
    return this.Moltin;
  }

  getAllProducts() {
    return this.Moltin.Products.All();
  }

  addToSavedItems(item) {
    this.savedItems.push(item);
    console.log(item + "added to saved")
  }

  getSavedItems() {
    return this.savedItems;
  }

  setCategories(cat: Categories) {
    this.categories = cat;
  }

  getCategories(): Categories {
    return this.categories;
  }



}
