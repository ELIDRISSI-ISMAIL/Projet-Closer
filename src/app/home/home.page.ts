import { Component, OnInit } from '@angular/core';
import {UserService} from "../services/user.service";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit{

  email: string="";
  password: string="";
  // public users !: Array<user>;



  constructor(private userService : UserService, private p : ProductService, private router: Router) {
  }

  ngOnInit() {

  }

public login(){
  this.loginServ(this.email, this.password);
  console.log(this.p.demandes)
}

  public loginServ(email:string, password:string) : any{
    this.userService.loginService(email,password).subscribe((result:any ) => {
      console.log(result);
      // this.user=result;
      if (result != null){
        this.p.currentUser = result;
        console.log(this.p.currentUser);
        this.p.getDemandessub();
        this.router.navigateByUrl('/tabs/tab2');
      }
      return result;
    });
  }

  // login(){
  //   console.log('====================================');
  //   console.log(this.email);
  //   console.log(this.password);
  //   console.log('====================================');
  //
  //
  //   console.log(this.userService.login(this.email, this.password))
  //   this.p.currentUser=  this.userService.login(this.email, this.password);
  //   console.log(this.p.currentUser);
  // }

}
