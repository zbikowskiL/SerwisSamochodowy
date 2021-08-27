import { Component, Input, Output, EventEmitter, HostBinding, OnInit, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Car } from '../models/car';

@Component({
  selector: '[app-car-table-row]',
  templateUrl: './car-table-row.component.html'
})
export class CarTableRowComponent implements OnInit {
  
  
  @Input() car : Car;
  @Output() removedCar = new EventEmitter();
  @HostBinding('class.after-deadline') deadlie: boolean = false;
  
  @HostListener('mouseenter') onMouseEnter() {
    this.setRemoveBtn('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setRemoveBtn('black');
  }

  constructor(private el: ElementRef, private renderer: Renderer2){

  }
  
  ngOnInit(): void {
    if (new Date(this.car.deadline) < new Date()){
      this.deadlie = true;
    }
  }
  
  removeCar(carId, event) {
    event.stopPropagation();
    this.removedCar.emit(carId);
  }

  private setRemoveBtn(color): void{
    this.renderer.setStyle(this.el.nativeElement.querySelector('.remove-btn'), 'color', color);
  }
}