import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials = {
    login: 'admin',
    password: 'admin'
  };

  private isUserLoggedIn = false;

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password){
        this.isUserLoggedIn = true;
        resolve('Success!')
      }else{
        reject();
      }
    })
  };

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

}
