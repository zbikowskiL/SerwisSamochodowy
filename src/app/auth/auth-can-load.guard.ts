import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthCanLoadGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){
  }  
  
  canLoad(route: Route): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()){
      return true
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
