import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOfComponent } from './components/rxjs-of/rxjs-of.component';
import { RxjsTimerComponent } from './components/rxjs-timer/rxjs-timer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    RxjsOfComponent,
    RxjsTimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
