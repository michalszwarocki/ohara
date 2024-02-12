import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[oharaCustomMatCardHover]',
  standalone: true
})
export class CustomMatCardHoverDirective {
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.transition = 'transform 0.3s';
    this.elementRef.nativeElement.style.transform = 'scale(1.05)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.transition = 'transform 0.3s';
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }

}
