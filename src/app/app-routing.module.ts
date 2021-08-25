import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AuthCanLoadGuard } from './auth/auth-can-load.guard';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'cars', canLoad: [AuthCanLoadGuard], loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES, {enableTracing: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }