import {Component, Input, NgZone, OnInit} from '@angular/core';
import {AlertController} from "@ionic/angular";
import {HttpErrorResponse} from "@angular/common/http";
import { ProductService } from '../services/product.service';
import {ResponseApi} from "../models/ResponseApi";
import {Adherent} from "../models/Adherent";
import {ResponseAd} from "../models/ResponseAd";
import {Observable} from "rxjs";
import {AdherentPost, ComptePost, PositionPost} from "../models/AdherentPost";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.css'],
})
export class Tab4Page implements OnInit {

//// Variables /////////
  adherents : Adherent[] =[];
  ad! : Adherent;
  adresp: AdherentPost;
  userForm!: FormGroup;
  @Input() category! : string;
  isProvider: Boolean=true;


  constructor(
    private router: Router,
    public formBuilder: FormBuilder,
    private zone: NgZone,
    private productService : ProductService,
    private alertController: AlertController) {

    this.adresp = new AdherentPost();
    // this.currentUser = this.adherents[0];
    this.userForm = this.formBuilder.group({
      name: [''],
      position:[''] ,
      compte: ComptePost,
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  ngOnInit() {
    this.getAdherents();
    this.ad=this.adherents[0];
    console.log(this.adherents,this.ad);
  }

////////// Fonction Test /////////
  // public getProducts(): void {
  //   this.productService.getProducts().subscribe(
  //     (response: ResponseApi) => {
  //       this.products = response.products;
  //       console.log(response);
  //       console.log(this.adherents);
  //     }
  //   );
  // }

  // Prends les adherents de la BDD
  public getAdherents(): void {
    this.productService.getAdherents().subscribe(
      (response) => {
        this.adherents = response;
        console.log(response,this.ad);
      },

    );
  }



  public addAd():void {
    this.ad.name="Saleh";
    this.productService.postAdherent(this.adresp);
    this.adherents.push(this.ad);
    console.log(this.adresp);
  }




  public onSubmit(): any {
    if (!this.userForm.valid) {
      return false;
    } else {
      this.productService.createAd(this.userForm.value)
        .subscribe((response) => {
          this.zone.run(() => {
            this.userForm.reset();
            this.getAdherents();
          })
        });
    }
  }

  selectMe(adherent: Adherent) {
    this.productService.currentUser=adherent;
    console.log(adherent.provider);
    this.isProvider=this.productService.currentUser.provider;
  }
}
