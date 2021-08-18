import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCsImportant]'
})
export class CsImportantDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.fontWeight = 700;
    el.nativeElement.style.color = "#43a6ff";
  }

}
