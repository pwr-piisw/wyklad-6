import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsOfComponent } from './components/rxjs-of/rxjs-of.component';
import { RxjsTimerComponent } from './components/rxjs-timer/rxjs-timer.component';
import {RouterModule} from "@angular/router";
import { RxjsSubscribeComponent } from './components/rxjs-subscribe/rxjs-subscribe.component';
import { RxjsMergeComponent } from './components/rxjs-merge/rxjs-merge.component';
import { RxjsThrottleComponent } from './components/rxjs-throttle/rxjs-throttle.component';
import { RxjsDoubleClickComponent } from './components/rxjs-double-click/rxjs-double-click.component';
import { RxjsUnsubscribeComponent } from './components/rxjs-unsubscribe/rxjs-unsubscribe.component';
import { RxjsUnsubscribeTakeUntilComponent } from './components/rxjs-unsubscribe-take-until/rxjs-unsubscribe-take-until.component';
import { SignalWritableComponent } from './components/signal-writable/signal-writable.component';
import { SignalComputedComponent } from './components/signal-computed/signal-computed.component';
import { SignalSelectExampleComponent } from './components/signal-select-example/signal-select-example.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RxjsOfComponent,
    RxjsTimerComponent,
    RxjsSubscribeComponent,
    RxjsMergeComponent,
    RxjsThrottleComponent,
    RxjsDoubleClickComponent,
    RxjsUnsubscribeComponent,
    RxjsUnsubscribeTakeUntilComponent,
    SignalWritableComponent,
    SignalComputedComponent,
    SignalSelectExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
