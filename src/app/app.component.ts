import { Component, OnInit } from '@angular/core';
import { LayoutService } from './sharedModule/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'cars-service';
  isSidebarVisible: boolean = false;

  constructor(private layoutService: LayoutService){}
  
  ngOnInit(): void {
   this.layoutService.sidebardSource$.subscribe((isVisible) =>{
     this.isSidebarVisible = isVisible;
   })
  }
}
