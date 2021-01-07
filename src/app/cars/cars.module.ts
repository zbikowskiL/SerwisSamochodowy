import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import { SharedModule } from '../sharedModule/shared.module';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RouterModule } from '@angular/router';
import { CarResolve } from '../cars/car-resolve.service';
import { ReactiveFormsModule } from '@angular/forms';
import { IncomeTaxComponent } from './total-cost/income-tax/income-tax.component';
import { CostSharedService } from './cost-shared.service';
import { CarTableRowComponent } from './car-table-row/car-table-row.component';



@NgModule({
  declarations: [CarsListComponent, TotalCostComponent, CarDetailsComponent, IncomeTaxComponent, CarTableRowComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [CarsListComponent],
  providers: [
    CarResolve,
    CostSharedService
  ],

})
export class CarsModule { }
