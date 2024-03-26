import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  inputValue: String = 'Initial value from ts file';
  isDisable: Boolean = true;
  constructor() {}

  /////////// alternate way of ngModel //////////////
  inputValues(event: any) {
    this.inputValue = event.target.value;
  }

  showValue(event: any) {
    console.log(event.target.innerText);
    window.alert(event.target.innerText);
  }
}
