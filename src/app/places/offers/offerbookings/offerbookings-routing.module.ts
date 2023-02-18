import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OfferbookingsPage } from './offerbookings.page';

const routes: Routes = [
  {
    path: '',
    component: OfferbookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfferbookingsPageRoutingModule {}
