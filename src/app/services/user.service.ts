import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import {HttpClient} from'@angular/common/http';
import {user} from "../model/user/user";
import {ProductService} from "./product.service";
import {Adherent} from "../models/Adherent";
import {Router, RouterModule} from "@angular/router";

// import { compte } from './model/user/compte';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  // islogin=false;
  // admin=false;
  // suser=false;
  private source: string='localhost';


  constructor(private http : HttpClient, private productService: ProductService,
              private router: Router) {
    }





  loginService(email:string, password:string) : any{


    return this.http.get('http://'+this.source+':9999/adherents/login?email='+email+'&password='+password);
  }

  public signup(name:string, email:string, password:string){
    this.signupservice(name,email,password).subscribe((result:user ) => {
      console.log(result);
    });
  }


  signupservice(name:string, email:string, password:string) : any{


    return this.http.post('http://'+this.source+':9999/adherents/add', {

        "name" : name,
        "position" : {
          "latitude" : 1,
          "longitude" : 1
        },
        "compte" : {
          "email" : email,
          "password" : password
        }

    });
  }


}
