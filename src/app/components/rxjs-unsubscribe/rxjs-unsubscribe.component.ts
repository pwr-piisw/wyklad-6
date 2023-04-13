import {Component, OnDestroy} from '@angular/core';
import {of, Subscription} from "rxjs";

@Component({
  selector: 'app-rxjs-unsubscribe',
  templateUrl: './rxjs-unsubscribe.component.html',
  styleUrls: ['./rxjs-unsubscribe.component.scss']
})
export class RxjsUnsubscribeComponent implements OnDestroy {

  messages: string[] = [];
  subscription?: Subscription;

  clicked(): void {
    this.subscription = of(1,2,3,4,5)
      .subscribe(v => this.messages.push(`${v}`));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("Unsubscribed!");
  }
}
