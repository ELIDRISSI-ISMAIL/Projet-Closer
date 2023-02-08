import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4Page } from './tab4.page';

const routes: Routes = [

  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: '',
    component: Tab4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4PageRoutingModule {}
