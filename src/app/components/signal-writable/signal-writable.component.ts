import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-signal-writable',
  templateUrl: './signal-writable.component.html',
  styleUrls: ['./signal-writable.component.scss']
})
export class SignalWritableComponent {

  counter = signal(0);

  clicked() {
    this.counter.update((prev) => prev + 1);
  }
}
