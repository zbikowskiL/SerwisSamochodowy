import { Injectable } from '@angular/core';
import { Router, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface CanDeactivateComponent {
  CanDeactivet: () => Observable<boolean> | Promise<boolean> | boolean; 
}

@Injectable({
  providedIn: 'root'
})
export class FormCanDeacvivateGuard implements CanDeactivate<CanDeactivateComponent> {

  constructor(private authService: AuthService, private router: Router){
  }

  canDeactivate(component: CanDeactivateComponent): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree { 
    return component.CanDeactivet ? component.CanDeactivet() : true;
  }
  
}
