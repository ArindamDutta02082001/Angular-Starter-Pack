import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BabyComponentViewComponent } from './baby-component-view/baby-component-view.component';

@Component({
  selector: 'app-ng-afterviewinit',
  templateUrl: './ng-afterviewinit.component.html'
})
export class NgAfterviewinitComponent implements AfterViewChecked {
  @ViewChild('tempRef') babyComp!: BabyComponentViewComponent;

  selectedCarFromBabyComponent!: string;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    // this is triggered 
    this.selectedCarFromBabyComponent = this.babyComp.selectedCarValue;
    this.cdRef.detectChanges();
  }
}
