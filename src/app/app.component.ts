import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, RoutesRecognized } from '@angular/router';
import { LayoutService } from './sharedModule/services/layout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'cars-service';
  isSidebarVisible: boolean = false;
  isLoading: boolean = true;

  constructor(private layoutService: LayoutService, private router: Router) { }

  ngOnInit(): void {
    
    this.router.events.subscribe((routerEvent: Event) => this.checkRouterEvent(routerEvent));

    this.layoutService.sidebardSource$.subscribe((isVisible) => {
      this.isSidebarVisible = isVisible;
    })


  }

  private checkRouterEvent(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart ||
      routerEvent instanceof RoutesRecognized) {
      this.isLoading = true;
    } else if (routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError) {
      this.isLoading = false;
    }
  }
}
