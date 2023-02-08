import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  email: string="";
  password: string="";
  // public users !: Array<user>;



  constructor(private userService : UserService, private p : ProductService) {
  }

  ngOnInit() {

  }



  login(){
    console.log('====================================');
    console.log(this.email);
    console.log(this.password);
    console.log('====================================');

    this.p.currentUser= this.userService.login(this.email, this.password);
    console.log(this.p.currentUser);
  }

}
