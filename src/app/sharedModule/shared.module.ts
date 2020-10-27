import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameCutPipe } from './pipe/surname-cut.pipe';
import { CsImportantDirective } from './directives/cs-important.directive';



@NgModule({
  declarations: [HeaderComponent, SurnameCutPipe, CsImportantDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameCutPipe, CsImportantDirective]
})
export class SharedModule { }
