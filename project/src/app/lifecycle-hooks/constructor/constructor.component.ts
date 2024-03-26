import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
})
export class ConstructorComponent {
  title: string = 'Constructor';
  @Input() data: string = 'initial input value';

  // anything defined in protected or private in consructor is declared and initialized inside class to be used by others

  constructor(private ref: ElementRef) {
    console.info("first : constructor called here");
    console.log(this.title);
    console.log(this.data); // the default value gets printed not the value passed
  }

  // this.ref can be accessed
  // if you declare it publc it wont be accessed
}
