import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameCutPipe } from './pipe/surname-cut.pipe';



@NgModule({
  declarations: [HeaderComponent, SurnameCutPipe],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameCutPipe]
})
export class SharedModule { }
