// import {Component, Input, OnInit} from '@angular/core';
// import { Product } from '../../models/Product';
// import {ProductService} from "../../services/product.service";
// import { ResponseApi} from "models/ResponseApi";
// import {HttpErrorResponse} from "@angular/common/http";
// import {ProduitService} from "../../../../../../Angular-Project-master/src/app/services/produit.service";
//
// @Component({
//   selector: 'app-list-products',
//   templateUrl: './list-products.component.html',
//   styleUrls: ['./list-products.component.css']
// })
// export class ListProductsComponent implements OnInit{
//
//   products : Array<Product>;
//    @Input() category! : string;
//
//
//   constructor(private productService : ProductService,
//               private produitService : ProduitService) {
//     this.products=new Array<Product>();
//   }
//   affiche($event : Product){
//       console.log($event.title);
//   }
//   ngOnInit() {
//     this.getProducts();
//     this.produitService.getProducts();
//   }
//
//
//   public getProductsbySearch(s : string): void {
//     this.productService.getProductsbySearch(s).subscribe(
//       (response: ResponseApi) => {
//         this.products = response.products;
//         console.log(response);
//       },
//       (error: HttpErrorResponse) => {
//         alert(error.message);
//       }
//     );
//   }
//
//   public getCatItems(cat:string): void {
//     this.productService.getCatItems(cat).subscribe(
//       (response) => {
//         this.products = response.products;
//         console.log(response);
//       }
//     );
//   }
//
//   public getProducts(): void {
//     this.productService.getProducts().subscribe(
//       (response: ResponseApi) => {
//         this.products = response.products;
//         console.log(response);
//       }
//     );
//   }
//
//
//   add($event: Product){
//     this.produitService.addProduct($event)
//   }
// }
