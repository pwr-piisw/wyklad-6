import {Component, OnInit} from '@angular/core';
import {buffer, debounceTime, delay, filter, map, Subject} from "rxjs";

@Component({
  selector: 'app-rxjs-double-click',
  templateUrl: './rxjs-double-click.component.html',
  styleUrls: ['./rxjs-double-click.component.scss']
})
export class RxjsDoubleClickComponent implements OnInit {

  text = '';
  obs = new Subject();

  ngOnInit() {
    const clickStream = this.obs.asObservable();

    const multiClickStream = clickStream.pipe(
      buffer(clickStream.pipe(debounceTime(500))),
      map(list => list.length),
      filter(x => x >= 2)
    );

    multiClickStream.subscribe((numclicks) => this.text = ''+numclicks+'x click');

    multiClickStream
      .pipe(delay(2000))
      .subscribe(() => this.text = '');
  }
}
