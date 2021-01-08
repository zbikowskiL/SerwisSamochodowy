import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarsModule, CarsService, CarsRoutingModule } from './cars/export';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './coreModule/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarsModule,
    CommonModule,
    HttpClientModule,
    CoreModule, 
    AppRoutingModule,
    CarsRoutingModule,
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
