import { AfterContentChecked, AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-ng-aftercontentinit',
  templateUrl: './ng-aftercontentinit.component.html'
})
export class NgAftercontentinitComponent implements AfterContentInit , AfterContentChecked {

  ngAfterContentInit(): void {
    console.info('fifth : ng-aftercontentinit called here');
  }

  ngAfterContentChecked(): void {
      console.info('sixth : ng-aftercontentchecked called here');
  }
}
