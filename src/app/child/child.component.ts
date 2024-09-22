import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() dataFromParent!:string;

 @Output() isDataChangedInChild = new EventEmitter<boolean>();

 value:boolean = false;

 OnValueChange(){
  console.log('clicked');
    this.value = !this.value;
    this.isDataChangedInChild.emit(this.value);
 }

}
