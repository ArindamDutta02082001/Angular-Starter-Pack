import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})
export class DirectivesComponent {
  showContent = true;
  notShowContent = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
  value = 'B';
}
