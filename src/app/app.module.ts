import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarsService } from './cars/export';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './coreModule/core.module';
import { LoginModule } from './login/login.module';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LayoutService } from './sharedModule/services/layout.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    CoreModule, 
    LoginModule,
    AppRoutingModule
  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
