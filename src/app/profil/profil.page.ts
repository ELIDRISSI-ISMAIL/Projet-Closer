import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  Ntelephone: string="";
  prenom: string="";
  Nom: string="";
  adresse: string="";

  constructor() { }

  ngOnInit() {
  }

}
