import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RxjsOfComponent} from "./components/rxjs-of/rxjs-of.component";
import {RxjsTimerComponent} from "./components/rxjs-timer/rxjs-timer.component";
import {RxjsMergeComponent} from "./components/rxjs-merge/rxjs-merge.component";
import {RxjsThrottleComponent} from "./components/rxjs-throttle/rxjs-throttle.component";
import {RxjsSubscribeComponent} from "./components/rxjs-subscribe/rxjs-subscribe.component";
import {RxjsDoubleClickComponent} from "./components/rxjs-double-click/rxjs-double-click.component";
import {RxjsUnsubscribeComponent} from "./components/rxjs-unsubscribe/rxjs-unsubscribe.component";

const routes: Routes = [{
  path: 'rxjs-of',
  component: RxjsOfComponent
}, {
  path: 'rxjs-timer',
  component: RxjsTimerComponent
}, {
  path: 'rxjs-merge',
  component: RxjsMergeComponent
}, {
  path: 'rxjs-throttle',
  component: RxjsThrottleComponent
}, {
  path: 'rxjs-subscribe',
  component: RxjsSubscribeComponent
}, {
  path: 'rxjs-double-click',
  component: RxjsDoubleClickComponent
}, {
  path: 'rxjs-unsubscribe',
  component: RxjsUnsubscribeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
