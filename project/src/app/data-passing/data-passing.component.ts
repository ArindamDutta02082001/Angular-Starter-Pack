import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
})
export class DataPassingComponent {
  
  // using @Input() decorator

  @Input() data: string = '';
  @Input() personObj!: any[];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  // using @ViewChild()

  varChild: string = 'Arindam';

  nameList: string[]= [];

  updateList(data: string) {
    this.nameList.push(data);
  }
}
