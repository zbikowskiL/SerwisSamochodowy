import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent {

  @Input() inputTotalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT: number = 1.23;

  showGross(): void {
    this.shownGross.emit(this.inputTotalCost * this.VAT);
  }
}
