// export class Product{
//   product_title : string;
//   product_main_image_url : string;
//   app_sale_price : string;
//   product_detail_url : string;
//   product_id : string;
//
//     public constructor(product_title: string,
//                        product_main_image_url: string,
//                        app_sale_price : string,
//                        product_detail_url : string,
//                        product_id : string) {
//       this.product_title = product_title;
//       this.product_main_image_url = product_main_image_url;
//       this.app_sale_price = app_sale_price;
//       this.product_detail_url = product_detail_url;
//       this.product_id = product_id;
//     }
// }
export class Product{
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: Array<string>;


  constructor(id: number, title: string, description: string, price: number, discountPercentage: number, rating: number, stock: number, brand: string, category: string, thumbnail: string, images: Array<string>) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
    this.images = images;
  }
}

