import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/auth/form-can-deactivate.guard';
import { CarsServiceValidators } from 'src/app/sharedModule/CarsServiceValidator';
import { CarTableRowComponent } from '../car-table-row/car-table-row.component';
import { CarsService } from '../cars.service';
import { CostSharedService } from '../cost-shared.service';
import { Car } from '../models/car';
import { TotalCostComponent } from '../total-cost/total-cost.component';
@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CarsListComponent implements OnInit, AfterViewInit, CanDeactivateComponent {

  constructor(private carsService: CarsService,
    private formBuilder: FormBuilder,
    private costSharedService: CostSharedService,
    private router: Router) { }

  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent;
  @ViewChildren(CarTableRowComponent) carRows: QueryList<CarTableRowComponent>;

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

    this.carRows.changes.subscribe(() => {
      if (this.carRows.some(x => x.car.cost > 10000)) {
        this.carRows.forEach(c => {
          console.log(`Warning, cost repair ${c.car.model} plate ${c.car.plate} is the highest than 10.000 zł.`);
        })
      }
    })
  }

  getAllCars(): void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
      this.costSharedService.sharedCost(this.totalCost);
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
    let carFromData = Object.assign({}, this.carForm.value);
    carFromData.cost = this.getTotalPartsCost(carFromData.parts);
    this.carsService.addCar(carFromData).subscribe(() =>
      this.getAllCars());
  }

  getTotalPartsCost(parts){
    return parts.reduce((prev, nextPart) =>{
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0);
  }

  removeCar(id: number): void {
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
      power: ['', CarsServiceValidators.power],
      clientFirstName: ' ',
      clientSurname: ' ',
      isFullyDamaged: "true",
      year: '',
      parts: this.formBuilder.array([])
    })
  }

  buildParts() : FormGroup {
    return this.formBuilder.group({
      name: '',
      inStock: true,
      price: ''
    })
  }

  get parts() : FormArray {
    return <FormArray>this.carForm.get('parts');
  }

  addPart() : void {
    this.parts.push(this.buildParts());
  }

  removePart(i) : void {
    this.parts.removeAt(i);
  }

  togglePlateValidity() {
    const plateControl = this.carForm.get('plate');
    const damagedControl = this.carForm.get('isFullyDamaged');

    if(damagedControl.value){
      plateControl.clearValidators();
    }else {
      plateControl.setValidators([Validators.required, Validators.minLength(2), Validators.maxLength(10)]);
    }

    plateControl.updateValueAndValidity();
  }

  
  CanDeactivet(){
    if(!this.carForm.dirty){
      return true;
    }

    return window.confirm('Discard changes?');
  }
}
