import {Component, OnDestroy} from '@angular/core';
import {of, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-rxjs-unsubscribe-take-until',
  templateUrl: './rxjs-unsubscribe-take-until.component.html',
  styleUrls: ['./rxjs-unsubscribe-take-until.component.scss']
})
export class RxjsUnsubscribeTakeUntilComponent implements OnDestroy {

  messages: string[] = [];

  private unsubscribe$ = new Subject<void>();

  clicked(): void {
    of(1, 2, 3, 4, 5)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(v => this.messages.push(`${v}`));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    console.log("Unsubscribed!");
  }
}
