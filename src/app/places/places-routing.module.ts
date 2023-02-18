import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PlacesPage,
  // },
  {
    path: 'tabs',
    component: PlacesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./discover/discover.module').then(
                (m) => m.DiscoverPageModule
              ),
          },
          {
            path: ':placeId',
            loadChildren: () => import('./discover/detailplace/detailplace.module').then(m => m.DetailplacePageModule)
          }
        ],
      },

      {
       path:'offers',
       children:[
        {
          path: '',
          loadChildren: () => import('./offers/offers.module').then(m=>m.OffersPageModule)
        },

        {

          path: 'new',
          loadChildren: () => import('./offers/newoffer/newoffer.module').then(m => m.NewofferPageModule)

        },

        {
          path: 'edit/:placeId',
          loadChildren: () => import('./offers/editoffer/editoffer.module').then(m => m.EditofferPageModule)
        },

        {
          path: ':placeId',
          loadChildren: () => import('./offers/offerbookings/offerbookings.module').then(m => m.OfferbookingsPageModule)
        }

       ]
      },
      {
        path:'',
        redirectTo: '/places/tabs/discover',
        pathMatch:'full'
      }
    ],
  },
  {
    path: '',
    redirectTo:'/places/tabs/discover',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
