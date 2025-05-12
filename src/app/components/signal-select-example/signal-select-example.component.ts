import {Component, computed, signal} from '@angular/core';

@Component({
  selector: 'app-signal-select-example',
  templateUrl: './signal-select-example.component.html',
  styleUrls: ['./signal-select-example.component.scss']
})
export class SignalSelectExampleComponent {

  items = ["apples", "bananas", "oranges"];

  private _selectedItem = signal<string>(this.items[0]);

  get selectedItem() {
    return this._selectedItem();
  }

  set selectedItem(value: string) {
    this._selectedItem.set(value);
  }

  selection = computed<string>(() => `Selected ${this._selectedItem()}`);
}
