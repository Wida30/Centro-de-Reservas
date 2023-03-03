import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditofferPageRoutingModule } from './editoffer-routing.module';

import { EditofferPage } from './editoffer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditofferPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditofferPage]
})
export class EditofferPageModule {}
