import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OfferbookingsPageRoutingModule } from './offerbookings-routing.module';

import { OfferbookingsPage } from './offerbookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OfferbookingsPageRoutingModule
  ],
  declarations: [OfferbookingsPage]
})
export class OfferbookingsPageModule {}
