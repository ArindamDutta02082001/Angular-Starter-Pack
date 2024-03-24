import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-ng-aftercontentinit',
  templateUrl: './ng-aftercontentinit.component.html'
})
export class NgAftercontentinitComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.info('fifth : ng-aftercontentinit called here');
  }
}
