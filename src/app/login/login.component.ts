import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent  {
  login: string = '';
  password: string = '';
  
  constructor(private authService: AuthService, private router: Router) { }

  onSumbmit(){
    this.authService.login(this.login, this.password).then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  onSubmitSuccess(){
    this.router.navigate(['/cars']);
  }

  onSubmitFailure(){
    console.log('Login or password is incorrect, please try again!')
  }
}
