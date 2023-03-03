import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewofferPageRoutingModule } from './newoffer-routing.module';

import { NewofferPage } from './newoffer.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    NewofferPageRoutingModule,
    SharedModule
  ],
  declarations: [NewofferPage]
})
export class NewofferPageModule {}
