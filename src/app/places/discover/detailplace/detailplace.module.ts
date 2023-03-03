
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailplacePageRoutingModule } from './detailplace-routing.module';

import { DetailplacePage } from './detailplace.page';
import { CreateBookingComponent } from './../../../bookins/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailplacePageRoutingModule
  ],
  declarations: [DetailplacePage, CreateBookingComponent],
  entryComponents: [CreateBookingComponent]
})
export class DetailplacePageModule {}
