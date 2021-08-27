import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostBinding, HostListener, Inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTop]'
})
export class ScrollTopDirective {

  private scrollThreshold = 150;

  constructor(private renderer: Renderer2,
              @Inject(DOCUMENT) private document,
              private hostElement: ElementRef) { }

    @HostBinding('class') scrollTopBtn = 'scroll-top-btn';

    @HostListener('click') onClick(){
      window.scrollTo(0,0);
    }

    @HostListener('document:scroll') onScroll() {
      let scrollPosition = window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop;

      if (scrollPosition > this.scrollThreshold){
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'block')
      } else {
        this.renderer.setStyle(this.hostElement.nativeElement, 'display', 'none');
      }
    }


}
