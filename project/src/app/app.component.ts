import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataPassingComponent } from './data-passing/data-passing.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';

  // using @Input decorators code
  compData: string = 'Hi from parent component data';
  person: Object[] = [
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
    },
  ];

  // using @ViewChild code
  @ViewChild('child') childref!: DataPassingComponent;
  @ViewChild('newItem') newItem !: ElementRef ;
  
  addNames() {
    console.log(this.childref.data);
    this.childref.updateList(this.newItem.nativeElement?.value);
  }

  // @Output decorator function
  childData: string = '';
  addItem(data: string) {
    this.childData = data;
  }

  items = [
    { name: 'Item 1', isValid: true },
    { name: 'Item 2', isValid: false },
    { name: 'Item 3', isValid: true },
    { name: 'Item 4', isValid: false },
    { name: 'Item 5', isValid: true },
  ];
}
