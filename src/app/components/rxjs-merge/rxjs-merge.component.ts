import { Component } from '@angular/core';
import {map, merge, take, timeInterval, timer} from "rxjs";

@Component({
  selector: 'app-rxjs-merge',
  templateUrl: './rxjs-merge.component.html',
  styleUrls: ['./rxjs-merge.component.scss']
})
export class RxjsMergeComponent {

  elements: string[] = [];
  clicked() {
    const source2 = timer(300, 2000)
      .pipe(
        take(10),
        map(i => 'item ' + i)
      );
    const source1 = timer(1000, 550)
      .pipe(
        take(10),
        timeInterval<number>(),
        map(t => t.interval),
        map(t => 'item ' + t)
      );
    merge(source1, source2).subscribe(x => this.elements.push(x));
  }
}
