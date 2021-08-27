import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SurnameCutPipe } from './pipe/surname-cut.pipe';
import { CsImportantDirective } from './directives/cs-important.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ScrollTopDirective } from './directives/scroll-top.directive';



@NgModule({
  declarations: [HeaderComponent, SurnameCutPipe, CsImportantDirective, PageNotFoundComponent, ScrollTopDirective],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, SurnameCutPipe, CsImportantDirective, PageNotFoundComponent, ScrollTopDirective]
})
export class SharedModule { }
