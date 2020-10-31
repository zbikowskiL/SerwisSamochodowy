import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit {

  constructor(private carsService: CarsService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;

  totalCost: number;
  grossCost: number;
  visibleGrossCost: boolean = true;

  cars: Car[];
  carForm: FormGroup;

  ngOnInit(): void {
    this.getAllCars();
    this.carForm = this.buildCarForm();
  }

  ngAfterViewInit() {
    this.showGross();
  }

  getAllCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  countTotalCost(): void {
    if (this.cars.length > 0) {
      this.totalCost = this.cars
        .map((car) => car.cost)
        .reduce((prev, next) => prev + next);
    } else {
      this.totalCost = 0;
    }

  }

  onShownGross(eventGrossCost: number): void {
    this.grossCost = eventGrossCost;
  }

  showGross(): void {
    this.visibleGrossCost = !this.visibleGrossCost;
    this.totalCostRef.showGross();
  }

  goToCarDetails(carId: number) {
    this.router.navigate(['/cars', carId]);
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() =>
    this.getAllCars());
  }

  removeCar(id: number, event) : void {
    event.stopPropagation();
    this.carsService.deleteCar(id).subscribe(() => {
      this.getAllCars();
    });
  }

  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: 'type',
      plate: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      deliveryDate: ' ',
      deadline: ' ',
      color: ' ',
      power: ' ',
      clientFirstName: ' ',
      clientSurname: ' ',
      cost: ' ',
      isFullyDamaged: "true",
      year: ''
    })
  }
}
