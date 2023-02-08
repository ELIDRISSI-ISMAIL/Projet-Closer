import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidationServicePage } from './validation-service.page';

const routes: Routes = [
  {
    path: '',
    component: ValidationServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValidationServicePageRoutingModule {}
