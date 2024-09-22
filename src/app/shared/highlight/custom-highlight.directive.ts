import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective{

  //here Renderer2 is used to safely manipulate the DOM
  //1: Cross platform - we use directly use document and when application is running
  // on server side then we will get undefined as DOM is only available in browser

  //2: CRS attacks

  constructor(private elementRef:ElementRef,private renderer:Renderer2) { }
  @HostListener('mouseenter') 
  mouseEnter(){
    this.setBackGroundColor('yellow');
  }

  @HostListener('mouseleave') 
  mouseLeave(){
    this.setBackGroundColor('');
  }

  private setBackGroundColor(color:string){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color',color);
  }

}
