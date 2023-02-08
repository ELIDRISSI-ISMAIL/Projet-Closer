  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiceDescriptionPageRoutingModule } from './service-description-routing.module';

import { ServiceDescriptionPage } from './service-description.page';
  import {ReviewComponent} from "../review/review.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiceDescriptionPageRoutingModule
  ],
  declarations: [ServiceDescriptionPage, ReviewComponent]
})
export class ServiceDescriptionPageModule {}
