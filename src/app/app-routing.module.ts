import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RxjsOfComponent} from "./components/rxjs-of/rxjs-of.component";
import {RxjsTimerComponent} from "./components/rxjs-timer/rxjs-timer.component";

const routes: Routes = [{
  path: 'rxjs-of',
  component: RxjsOfComponent
}, {
  path: 'rxjs-timer',
  component: RxjsTimerComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
