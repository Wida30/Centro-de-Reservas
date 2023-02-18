import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookinsPage } from './bookins.page';

const routes: Routes = [
  {
    path: '',
    component: BookinsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookinsPageRoutingModule {}
