import {Component, OnInit} from '@angular/core';
  import { PhotoService } from '../services/photo.service';
import {ProductService} from "../services/product.service";
import {Adherent} from "../models/Adherent";
import {Requests} from "../models/Requests";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  demandes: Requests[] = this.productService.demandes;


  constructor(public photoService: PhotoService,private  productService :ProductService, private router:Router) { }


  async ngOnInit() {
    if (this.productService.currentUser==null){
      this.router.navigateByUrl("/");
    }
    this.getDemandes();
    this.demandes = this.productService.demandes
    console.log(this.productService.demandes)
    await this.photoService.loadSaved();

  }

  public getDemandes(): void {
    this.productService.getDemandes().subscribe(
      (response) => {
        this.productService.demandes = response;
        console.log("2eme appel");
        console.log(response);
        this.demandes = this.productService.demandes;
        console.log(this.demandes);
      },

    );
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  refresh() {
    this.demandes = this.productService.demandes;
  }
}
