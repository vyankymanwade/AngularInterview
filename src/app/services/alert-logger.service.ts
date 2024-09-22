import { Injectable } from '@angular/core';
import { ILogger } from '../ILogger';

@Injectable({
  providedIn: 'root'
})
export class AlertLoggerService implements ILogger{

  constructor() { }

  log(msg: string): void {
    alert(msg);
  }
}
