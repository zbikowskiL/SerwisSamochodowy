import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarsListComponent } from './cars/cars-list/cars-list.component';

const APP_ROUTES: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'cars' },
  { path: 'cars', component: CarsListComponent }
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
