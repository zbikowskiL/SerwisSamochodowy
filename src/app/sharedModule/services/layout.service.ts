import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  sidebardSource$ = new Subject<boolean>();
  
  showSidebar(){
    this.sidebardSource$.next(true);
  }

  hideSidebar(){
    this.sidebardSource$.next(false);
  }
}
