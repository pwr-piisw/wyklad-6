import { Component } from '@angular/core';
import {delay, from, mergeMap, of, throttleTime} from "rxjs";

@Component({
  selector: 'app-rxjs-throttle',
  templateUrl: './rxjs-throttle.component.html',
  styleUrls: ['./rxjs-throttle.component.scss']
})
export class RxjsThrottleComponent {

  messages: string[] = [];

  clicked() {
    const times = [
      { value: 0, time: 100 },
      { value: 1, time: 600 },
      { value: 2, time: 400 },
      { value: 3, time: 900 },
      { value: 4, time: 200 }
    ];

    const source = from(times)
      .pipe(
        mergeMap(
          item => of(item.value).pipe(delay(item.time))),
        throttleTime(200)
      );

    const subscription = source.subscribe(
      x => this.messages.push(`Next: ${x}`),
      err => this.messages.push('error!'),
      () => this.messages.push('Completed'));
  }
}
