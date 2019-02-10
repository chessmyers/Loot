import { gateway as MoltinGateway } from '@moltin/sdk';
import {Product} from "../models/Product";

export class MoltinService {

  Moltin = MoltinGateway({
    client_id: 'VHWHr6RuM0RpnyRL86tgFGphC9XlbswiEnodYiXGEO'
  });

  savedItems: Product[];

  getMoltin() {
    return this.Moltin;
  }

  getAllProducts() {
    return this.Moltin.Products.All();
  }

  addToSavedItems(item) {
    this.savedItems.push(item);
  }

  getSavedItems() {
    return this.savedItems;
  }

}
