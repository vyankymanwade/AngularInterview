import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';
import { FormsModule } from '@angular/forms';
import { CustomIfDirective } from './shared/custom-if.directive';
import { CustomHighlightDirective } from './shared/highlight/custom-highlight.directive';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonService } from './services/common.service';
import { ILogger } from './ILogger';
import { ConsoleLoggerService } from './services/console-logger.service';
import { AlertLoggerService } from './services/alert-logger.service';
import { LOGGER_INJECTION_TOKEN } from './injection-token';
import { EmailMaskPipe } from './shared/Pipes/email-mask.pipe';

export function LoggerFactory():ILogger{
  const isConsoleLogger:boolean = false;
  if(isConsoleLogger){
    return new ConsoleLoggerService();
  }else{
    return new AlertLoggerService();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    ComponentDirectiveComponent,
    CustomIfDirective,
    CustomHighlightDirective,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    EmailMaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {provide:LOGGER_INJECTION_TOKEN,useFactory:LoggerFactory},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
