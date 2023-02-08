import { Component, OnInit } from '@angular/core';
import {format, parseISO} from 'date-fns';
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";
import {BookService} from "../Service/BookService";
import {AdherentPost} from "../models/AdherentPost";
import {catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Service} from "../models/Service";
import {ProductService} from "../services/product.service";
// import {format} from "util";

@Component({
  selector: 'app-validation-service',
  templateUrl: './validation-service.page.html',
  styleUrls: ['./validation-service.page.scss'],
})
export class ValidationServicePage implements OnInit {
  bookService: BookService |undefined;
  dateValue= format(new Date(), 'yyyy-MM-dd');
  showPicker = false;
  inputValue: string='';
  formattedString='';
  handlerMessage = '';
  roleMessage = '';

  dateString = '';
  services!: Service[];
  selectedService!: Service;
  private source: string='localhost';


  constructor(private alertController: AlertController, private router: Router,
              private http:HttpClient,
              private productService : ProductService) {
    this.selectedService = new Service('404',"vide");
    this.getServices();
    this.setToday();
  }
  public getServices(): void {
    this.productService.getServices().subscribe(
      (response) => {
        this.services = response;
        console.log("2eme appel"+response);
        console.log("Ceci est services "+this.services);

      },

    );
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Vous avez choisi le service de Service le '+ this.formattedString + ' pour '+this.inputValue,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Confirmer',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/success'])
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  ngOnInit() {
    if (this.productService.currentUser==null){
      this.router.navigateByUrl("/");
    }
    this.getServices();
  }
  setToday() {
    this.formattedString = format(parseISO(format(new Date(),'yyyy-MM-dd')+ 'T09:00:00.00Z'), 'MMM d,yyyy à HH:mm');
  };
  dateChanged(value:any){
    this.dateValue=value;
    console.log(value);
    this.formattedString = format(parseISO(value), 'MMM d,yyyy à HH:mm');
    this.dateString = format(parseISO(value), 'yyyy-MM-dd');

  }
  createAd(desc : string) : any{
    console.log(   "http://"+this.source+":9999/requests/add/1/1")
     return this.http.post("http://"+this.source+":9999/requests/add/"+this.productService.currentUser.id+"/1", {

       "description": desc,
      "dateChosen": this.dateString

    });
  }

  public createAdService(desc : string){
    this.createAd(desc).subscribe((result:any ) => {
      console.log(result);
      console.log(this.dateString)
    });
    this.productService.getDemandessub();
  }


  setServiceSelected(serv: Service) {
    this.selectedService=serv;
  }
}
