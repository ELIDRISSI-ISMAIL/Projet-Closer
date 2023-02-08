import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../models/Product";

import {ProduitService} from "../../../../../../Angular-Project-master/src/app/services/produit.service";
import { Router} from "@angular/router";
import {CategorieService} from "../../../../../../Angular-Project-master/src/app/services/categorie.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit{

  @Input() product! : Product;
  @Output() productSelected = new EventEmitter<Product>();

  clickProduct(){
    this.productSelected.emit(this.product);
  }

  ngOnInit(): void {

  }

 constructor(private produitService: ProduitService,
             private router: Router,
             private categoService : CategorieService) {}



  public addProduct(product : Product) {
     this.produitService.addProduct(product);
     console.log(this.produitService.getProducts());
  }


  navigateToComponent(product: Product) {
    this.categoService.produit=product;
    this.router.navigate(['/detail']).then();
   }
}
