import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email: string="";
  password: string="";
  name: string="";
  passwordconfirm: string="";



  constructor(private userService : UserService) {
  }

  ngOnInit() {

  }

  

  signup(){
    console.log('====================================');
    console.log(this.email);
    console.log(this.password);
    console.log(this.name);
    console.log('====================================');
    this.userService.signup(this.name, this.email, this.password);
  }


}
