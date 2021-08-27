import { Component, ComponentFactoryResolver, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from 'src/app/auth/form-can-deactivate.guard';
import { CarsService } from '../cars.service';
import { Car } from '../models/car';
import { DateInfoComponent } from './date-info/date-info.component';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.less']
})
export class CarDetailsComponent implements OnInit, CanDeactivateComponent {

  @ViewChild('dateInfoContainer', {read: ViewContainerRef}) dateInfoContainer : ViewContainerRef;
  dateInfoRef : ComponentRef<DateInfoComponent>;
  car : Car;
  carForm: FormGroup;
  elapsedDays: number;
  

  constructor(private carsService: CarsService,
              private formBuilder: FormBuilder,
              private componentFactoryResolver: ComponentFactoryResolver,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCar();
    this.carForm = this.buildCarForm();
  }

  createDateInfoComponent() {
    
    if (this.dateInfoContainer.get(0) !== null){
      return;
    }

    const dateinfoFactory = this.componentFactoryResolver.resolveComponentFactory(DateInfoComponent);
    this.dateInfoRef = <ComponentRef<DateInfoComponent>>this.dateInfoContainer.createComponent(dateinfoFactory);
    this.dateInfoRef.instance.car = this.car;
    this.dateInfoRef.instance.checkElapsedDays.subscribe((elapsedDays) =>{
      this.elapsedDays = elapsedDays;
    })
  }

  clearDateInfoComponent() {
    this.dateInfoRef.destroy()
    this.dateInfoRef = null;
  }

  buildCarForm() {
    let parts = this.car.parts.map((part) => this.formBuilder.group(part));
    return this.formBuilder.group({
      model: [this.car.model , Validators.required],
      type: this.car.type,
      plate: [this.car.plate , [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      deliveryDate: new Date(this.car.deliveryDate).toISOString().split('T')[0],
      deadline: new Date(this.car.deadline).toISOString().split('T')[0],
      color: this.car.color,
      power: this.car.power,
      clientFirstName: this.car.clientFirstName,
      clientSurname: this.car.clientSurname,
      isFullyDamaged: this.car.isFullyDamaged,
      year: this.car.year,
      parts: this.formBuilder.array(parts)
    })
  }

  loadCar(){
    this.car = this.route.snapshot.data['carResolve'];
  }

  updateCar(){
    let carFromData = Object.assign({}, this.carForm.value);
    carFromData.cost = this.getTotalPartsCost(carFromData.parts);

    this.carsService.updateCar(this.car.id, carFromData).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  getTotalPartsCost(parts){
    return parts.reduce((prev, nextPart) =>{
      return parseFloat(prev) + parseFloat(nextPart.price);
    }, 0);
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

  
  CanDeactivet(){
    if(!this.carForm.dirty){
      return true;
    }

    return window.confirm('Discard changes?');
  }

}
