import {Product} from "./Product";

export class ResponseApi{
  products : Array<Product> = [];

  public constructor(docs: Array<Product>) {
    this.products = docs;
  }
}
