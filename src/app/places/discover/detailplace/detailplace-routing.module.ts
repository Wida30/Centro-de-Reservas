import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailplacePage } from './detailplace.page';

const routes: Routes = [
  {
    path: '',
    component: DetailplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailplacePageRoutingModule {}
