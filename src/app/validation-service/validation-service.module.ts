import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValidationServicePageRoutingModule } from './validation-service-routing.module';

import { ValidationServicePage } from './validation-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValidationServicePageRoutingModule
  ],
  declarations: [ValidationServicePage]
})
export class ValidationServicePageModule {}
