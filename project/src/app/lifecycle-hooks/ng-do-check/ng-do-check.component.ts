import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-ng-do-check',
  templateUrl: './ng-do-check.component.html',
})
export class NgDoCheckComponent implements DoCheck {
  
  ngDoCheck(): void {
    console.info('fourth : ngdocheck called here');
  }

  nothing() {}
}
