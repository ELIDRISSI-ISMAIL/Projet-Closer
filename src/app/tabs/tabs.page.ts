import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {WelcomePage} from "../welcome/welcome.page";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.css']
})
export class TabsPage implements OnInit{

  route : string="tab1";
  comp = WelcomePage;

  constructor(private serv :ProductService) {}
   ngOnInit() {
    // if (this.serv.currentUser.provider){this.route='tab2'}
    // else this.route='tab1';
   }

  getDemandes() {
    console.log(this.serv.demandes)
    if (this.serv.currentUser.provider==false){
      this.serv.getDemandessub();
    }
    else{
      this.serv.getAllDemandes()
    }
  }
}
