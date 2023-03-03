import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading: boolean = false;
  isLogin: boolean = true;

  constructor(
    private authService: AuthserviceService,
    private router: Router,
    private loadingCrt: LoadingController
  ) {}

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.authService.onLogin();
    this.loadingCrt
      .create({
        keyboardClose: true,
        message: 'espere un momento, por favor',
      })
      .then(loadinEl => {
        loadinEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadinEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      });
  }

  logOut() {
    this.authService.onLogOut();
  }

  cambioModo() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLogin) {
      //peticion a los servidores de login
    } else {
      // petición a los servidores de signup
    }
  }
}
