import {Component, OnInit} from '@angular/core';
  import { PhotoService } from '../services/photo.service';
import {ProductService} from "../services/product.service";
import {Adherent} from "../models/Adherent";
import {Requests} from "../models/Requests";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.css']
})
export class Tab2Page implements OnInit{
  demandes: Requests[] = this.productService.demandes;

  private source: string='10.72.103.93';

  inputValue: string='';


  constructor(public photoService: PhotoService,
              private http:HttpClient,
              public  productService :ProductService, private router:Router) { }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async ngOnInit() {
    if (this.productService.currentUser==null){
      this.router.navigateByUrl("/");
    }
    if (this.productService.currentUser.provider == false){
      this.getDemandes();
    }
    else{
      this.getAllDemandes();
    }
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
  public getAllDemandes(): void {
    this.productService.getDemandesAll().subscribe(
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

  addOfferToRequest(id: string) {
    this.createAd(id, this.inputValue).subscribe((result:any ) => {
      console.log(result);
    });
  }

  createAd(id:string, desc : string) : any{
    console.log("http://"+this.source+":9999/requests/addOffer/"+id+"/"+this.productService.currentUser.id)
    return this.http.post("http://"+this.source+":9999/requests/addOffer/"+id+"/"+this.productService.currentUser.id, {
      "description": desc,
    });
  }

  chooseOffer(id: string, id2: string) {
    this.choose(id, id2).subscribe((result:any ) => {
      console.log(result);
    });
  }

  private choose(id: string, id2: string) {
    console.log("http://"+this.source+":9999/requests/chooseOffer/"+id+"/"+id2)
    return this.http.post("http://"+this.source+":9999/requests/chooseOffer/"+id+"/"+id2, {
    });
  }
}
