import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent implements OnChanges {

  @Input() inputTotalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private VAT: number = 1.23;

  costThreshold: number = 10000;
  isCostToLow: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.isCostToLow = changes['inputTotalCost'].currentValue < this.costThreshold;
  }

  showGross(): void {
    this.shownGross.emit(this.inputTotalCost * this.VAT);
  }

}
