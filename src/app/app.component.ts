import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'project';

  // @Input decorators parameters
  compData: string = 'Hi from parent component data';
  person: Object[] = [
    {
      name: 'Katsuko Saruhashi',
      imageId: 'YfeOqp2',
    },
  ];

  // @Output decorator function
  childData : string = "";
  addItem(data : string)
  {
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
