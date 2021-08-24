import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FormCanDeacvivateGuard } from 'src/app/auth/form-can-deactivate.guard';
import { CarDetailsComponent } from '../car-details/car-details.component';
import { CarResolve } from '../car-resolve.service';
import { CarsListComponent } from '../cars-list/cars-list.component';
import { CarsComponent } from '../cars.component';

const CARS_ROUTES: Route[] = [
  {
    path: '',
    component: <any> CarsComponent,
    children: [
      {
        path: '',
        component: <any> CarsListComponent,
        canDeactivate: [FormCanDeacvivateGuard]
      },
      {
        path: ':id',
        component: <any> CarDetailsComponent,
        canDeactivate: [FormCanDeacvivateGuard],
        resolve: { carResolve : CarResolve }
      }
    ]
  }
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
