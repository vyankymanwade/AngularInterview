import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective implements OnInit{

  @Input('appCustomIf') isSpecial !:boolean;

  constructor(private templateRef:TemplateRef<any>, private viewContainerRef:ViewContainerRef ){

  }

  ngOnInit(): void {
    if(this.isSpecial){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

  

}
