import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements   CanLoad {

  constructor( private authService: AuthserviceService,
    private router: Router){

  }



  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.authService.userAuth){
        this.router.navigateByUrl('/auth');
      }
    return this.authService.userAuth;
  }
}





// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canActivateChild(
//   childRoute: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canDeactivate(
//   component: unknown,
//   currentRoute: ActivatedRouteSnapshot,
//   currentState: RouterStateSnapshot,
//   nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
// canMatch(
//   route: Route,
//   segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//   return true;
// }
