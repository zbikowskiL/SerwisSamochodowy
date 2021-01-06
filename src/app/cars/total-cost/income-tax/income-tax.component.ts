import { Component, OnInit } from '@angular/core';
import { CostSharedService } from '../../cost-shared.service';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
})
export class IncomeTaxComponent implements OnInit {

  private inComeTax : number = 18;
  income : number;

  constructor(private costSharedService: CostSharedService) { }

  ngOnInit(): void {
    this.costSharedService.totalCostSource$.subscribe((cost) => {
      this.income = cost * this.inComeTax / 100;
    });
  }

}
