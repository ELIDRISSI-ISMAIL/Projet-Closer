import {Component, OnInit} from '@angular/core';
  import { PhotoService } from '../services/photo.service';
import {ProductService} from "../services/product.service";
import {Adherent} from "../models/Adherent";
import {Requests} from "../models/Requests";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  demandes!: Requests[];


  constructor(public photoService: PhotoService,private  productService :ProductService) { }


  async ngOnInit() {
    await this.photoService.loadSaved();
    this.getDemandes();
  }

  public getDemandes(): void {
    this.productService.getDemandes().subscribe(
      (response) => {
        this.demandes = response;
        console.log("2eme appel");
        console.log(response);
        console.log("Ceci est services "+this.demandes[0].dateChosen);

      },

    );
  }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
