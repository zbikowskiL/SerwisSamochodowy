import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CostSharedService {
  totalCostSource$ = new Subject<number>();
  
  sharedCost(cost: number){
    this.totalCostSource$.next(cost);
  }
}
