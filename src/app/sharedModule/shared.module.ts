import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameCutPipe } from './pipe/surname-cut.pipe';
import { CsImportantDirective } from './directives/cs-important.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [HeaderComponent, SurnameCutPipe, CsImportantDirective, PageNotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameCutPipe, CsImportantDirective, PageNotFoundComponent]
})
export class SharedModule { }
