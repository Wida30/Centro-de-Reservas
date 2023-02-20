import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading: boolean = false

  constructor(private authService: AuthserviceService,
    private router: Router,
    private loadingCrt: LoadingController) { }

  ngOnInit() {
  }

  login(){
    this.isLoading = true;
    this.authService.onLogin()
    this.loadingCrt.create({
      keyboardClose: true,
      message: 'espere un momento, por favor'
    }).then(loadinEl =>{
      loadinEl.present();
      setTimeout(()=>
    {  this.isLoading= false;
     loadinEl.dismiss()
      this.router.navigateByUrl('/places/tabs/discover');
    }, 1500 );
    });

  }

  logOut(){
    this.authService.onLogOut()
  }
}
