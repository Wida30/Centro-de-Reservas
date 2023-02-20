import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private userUath = false;

  get userAuth(){
    return this.userUath
  }

  constructor() { }

  onLogin(){
    this.userUath=true}

  onLogOut(){
    this.userUath = false
  }
}
