import { Component, Inject } from '@angular/core';
import { ILogger } from '../ILogger';
import { LOGGER_INJECTION_TOKEN } from '../injection-token';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(@Inject(LOGGER_INJECTION_TOKEN) private logger:ILogger){

  }
  ngOnInit(){
    this.logger.log("this is logged")
  }
}
