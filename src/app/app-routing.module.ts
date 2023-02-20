import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthguardGuard } from './auth/authguard.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)


  },
  {
    path: 'places',
    loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule), canLoad: [AuthguardGuard]
  },
  {
    path: 'bookins',
    loadChildren: () => import('./bookins/bookins.module').then( m => m.BookinsPageModule), canLoad: [AuthguardGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
