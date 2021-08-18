import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CarsService } from './cars.service';
import { Car } from './models/car';

@Injectable()
export class CarResolve implements Resolve<Car>{
    constructor(private carService: CarsService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
       return this.carService.getCar(route.params['id']);
    }
}