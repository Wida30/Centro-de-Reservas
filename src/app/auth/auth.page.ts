import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthserviceService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.authService.onLogin()
    this.router.navigateByUrl('/places/tabs/discover')
  }

  logOut(){
    this.authService.onLogOut()
  }
}
