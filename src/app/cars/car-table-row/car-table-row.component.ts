import { Component, Input, Output, EventEmitter, HostBinding, OnInit } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[app-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent implements OnInit {
  
  
  @Input() car : Car;
  @Output() removedCar = new EventEmitter();
  @HostBinding('class.after-deadline') deadlie: boolean = false;
  
  ngOnInit(): void {
    if (new Date(this.car.deadline) < new Date()){
      this.deadlie = true;
    }
  }
  
  removeCar(carId, event) {
    event.stopPropagation();
    this.removedCar.emit(carId);
  }
}