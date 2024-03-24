import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
})
export class LifecycleHooksComponent {
  // constructor
  dataValue: string =
    'This is a constructor value that wont loads when constructor is initialized';

  // onchange func

  onChangeVariable: string = 'null val ';
  addNewItem(value: string) {
    this.onChangeVariable = value;

  }
}
