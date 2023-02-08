import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Service} from "../models/Service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.css']
})
export class Tab1Page implements OnInit{

  services!: Service[];
  selectedService!: Service;
  constructor(private productService : ProductService) {
this.selectedService = new Service('404',"vide");
  }

  ngOnInit(): void {
       this.getServices();
    console.log(this.services);
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

  showSelection() {
    console.log(this.selectedService.name);
  }

  select(serv: Service) {
    this.selectedService=serv;
  }

  registerProvider() {
this.productService.addProvider(this.selectedService);

  }
}
