import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-passing',
  templateUrl: './data-passing.component.html',
})
export class DataPassingComponent {
  @Input() data: string = '';
  @Input() personObj!: any[];

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  
}
