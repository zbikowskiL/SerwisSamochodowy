import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const CARS_ROUTES: Route[] = [
  // {path: 'cars/:id', component: CarDetilsComponent }
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
