import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarsModule } from './cars/cars.module';
const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
