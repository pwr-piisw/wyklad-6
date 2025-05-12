import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-computed',
  templateUrl: './signal-computed.component.html',
  styleUrls: ['./signal-computed.component.scss']
})
export class SignalComputedComponent {

  counterA = signal(0);
  counterB = signal(0);
  counterC = computed(() => this.counterA() + 2*this.counterB());

  incrementA() {
    this.counterA.update((prev) => prev + 1);
  }

  incrementB() {
    this.counterB.update((prev) => prev + 10);
  }
}
