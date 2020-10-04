import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../sharedModule/shared.module';



@NgModule({
  declarations: [CarsListComponent, TotalCostComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [CarsListComponent]
})
export class CarsModule { }
