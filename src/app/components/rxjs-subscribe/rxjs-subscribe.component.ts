import { Component } from '@angular/core';
import {take, timeInterval, timer} from "rxjs";

@Component({
  selector: 'app-rxjs-subscribe',
  templateUrl: './rxjs-subscribe.component.html',
  styleUrls: ['./rxjs-subscribe.component.scss']
})
export class RxjsSubscribeComponent {

  msgs: string[] = [];

  clicked() {
    timer(200, 100).pipe(
      timeInterval(),
      //pluck('interval'),
      take(3)
    )
      .subscribe(
        v => this.msgs.push(JSON.stringify(v)),
        e => this.msgs.push(e),
        () => this.msgs.push('completed')
      );
  }
}
