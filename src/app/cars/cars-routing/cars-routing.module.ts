import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CarDetailsComponent } from '../car-details/car-details.component';

const CARS_ROUTES: Route[] = [
  {path: 'cars/:id', component: CarDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CARS_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule { } // zaimportować w app.module
