import { Injectable } from '@angular/core';
import { LayoutService } from '../sharedModule/services/layout.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private layoutService: LayoutService){ }

  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  private isUserLoggedIn = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password){
        this.isUserLoggedIn = true;
        this.layoutService.showSidebar();
        resolve('Success!')
      }else{
        reject();
      }
    })
  };

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

  logOut(){
    this.isUserLoggedIn = false;
    this.layoutService.hideSidebar();
  }

}
