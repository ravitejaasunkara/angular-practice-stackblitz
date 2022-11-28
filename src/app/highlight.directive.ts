import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elerf:ElementRef) { 
    this.elerf.nativeElement.style.backgroundColor = '';
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight('green')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight('pink')
  }
  private highlight(color:string){
    this.elerf.nativeElement.style.backgroundColor = color;
  }
}