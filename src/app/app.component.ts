import { Router } from '@angular/router';
import { AuthserviceService } from './auth/authservice.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private authService: AuthserviceService, private router: Router) {}

  onLogOut(){
    this.authService.onLogOut()
    this.router.navigateByUrl('/auth')
  }
}
