import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-service-description',
  templateUrl: './service-description.page.html',
  styleUrls: ['./service-description.page.scss'],
})
export class ServiceDescriptionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  validate(){
    this.router.navigate(['/validation-service'])

  }

}
