import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

  constructor() { }

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;
  visibleGrossCost: boolean = true;

  cars: Car[] = [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'KRK2200',
      deliveryDate: '24-05-2017',
      deadline: '03-06-2016',
      client: {
        firstName: 'Michał',
        surname: 'Nowak'
      },
      cost: 1200,
      isFullyDamaged: false
    },
    {
      id: 3,
      model: 'Renault CLIO',
      plate: 'GWE22011',
      deliveryDate: '02-02-2017',
      deadline: '03-03-2017',
      client: {
        firstName: 'Beata',
        surname: 'Dampc'
      },
      cost: 2800,
      isFullyDamaged: true
    }
  ]

  ngOnInit(): void {
    this.countTotalCost();
  }

  ngAfterViewInit() {
    this.showGross();
  }

  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((prev, next) => prev + next);
  }

  onShownGross(eventGrossCost: number): void {
    this.grossCost = eventGrossCost;
  }

  showGross(): void {
    this.visibleGrossCost = !this.visibleGrossCost;
    this.totalCostRef.showGross();
  }
}
