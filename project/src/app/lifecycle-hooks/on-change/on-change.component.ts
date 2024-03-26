import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-on-change',
  templateUrl: './on-change.component.html',
})
export class OnChangeComponent implements OnChanges {
  title: string = 'Constructor';
  @Input() data: string = 'initial input value';


  firstChange!: boolean;
  previousValue!: string;
  currentValue!: string;

  constructor(private ref: ElementRef) {
    console.info('first : constructor called here');
    console.log(this.title);
    console.log(this.data); // the default value gets printed not the value passed
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info('second : ngonchange called here');
    // console.log(changes);
    console.log(this.title);
    console.log(this.data);           

    this.currentValue = changes?.['data'].currentValue;
    this.previousValue = changes?.['data'].previousValue;
    this.firstChange = changes?.['data'].isFirstChange();
  }
}
