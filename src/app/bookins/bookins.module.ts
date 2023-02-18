import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookinsPageRoutingModule } from './bookins-routing.module';

import { BookinsPage } from './bookins.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookinsPageRoutingModule
  ],
  declarations: [BookinsPage]
})
export class BookinsPageModule {}
