import { Component } from '@angular/core';
import {timer} from "rxjs";

@Component({
  selector: 'app-rxjs-timer',
  templateUrl: './rxjs-timer.component.html',
  styleUrls: ['./rxjs-timer.component.scss']
})
export class RxjsTimerComponent {

  elements: number[] = [];
  clicked() {
    const o1 = timer(2000, 1200);
    o1.subscribe(x => this.elements.push(x));
  }
}
