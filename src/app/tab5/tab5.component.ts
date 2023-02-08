import { Component, OnInit } from '@angular/core';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.component.html',
  styleUrls: ['./tab5.component.scss'],
})
export class Tab5Component implements OnInit {


  ngOnInit() {}
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
