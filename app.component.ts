import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Profil', url: '/profil', icon: 'person' },
    { title: 'Espace Fournisseurs', url: '/folder/Favorites', icon: 'people' },
    { title: 'Suivi des demandes', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Historique des demandes', url: '/folder/Inbox', icon: 'mail' },

    
  ];
  // public labels = ['Historique des demandes', 'Profil', 'Suivi des demandes', 'espace Fournisseur'];
  // constructor() {}
}
