import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.css']
})
export class TabsPage implements OnInit{

  route : string="tab1";
  constructor(private serv :ProductService) {}
   ngOnInit() {
    // if (this.serv.currentUser.provider){this.route='tab2'}
    // else this.route='tab1';
   }

  getDemandes() {
    console.log(this.serv.demandes)
    this.serv.getDemandes();
  }
}
