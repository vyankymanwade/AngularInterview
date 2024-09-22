import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  consoleLogger(msg:string){
    console.log(msg);
  }

  promptLogger(msg:string){
    alert(msg);
  }
}
