import { Component } from '@angular/core';
import {of} from "rxjs";

@Component({
  selector: 'app-rxjs-of',
  templateUrl: './rxjs-of.component.html',
  styleUrls: ['./rxjs-of.component.scss']
})
export class RxjsOfComponent {

  elements: number[] = [];

  clicked() {
    of(1, 2, 3, 4, 5).subscribe(v => this.elements.push(v));
  }
}
