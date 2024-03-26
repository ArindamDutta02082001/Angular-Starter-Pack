import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-on-init',
  templateUrl: './on-init.component.html',
})
export class OnInitComponent implements OnChanges, OnInit {
  title: string = 'Constructor';
  @Input() data: string = 'initial input value';

  firstChange!: boolean;
  previousValue!: string;
  currentValue!: string;

  @ViewChild('refElement') templateRef !: ElementRef;

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

    this.currentValue = changes?.['data']?.currentValue;
    this.previousValue = changes?.['data']?.previousValue;
    this.firstChange = changes?.['data']?.isFirstChange();
  }

  ngOnInit(): void {
    console.info('third : ngoninit called here');
    console.log(this.title);
    console.log(this.data);

    /*
    By the time ngOnIt gets called , none of the child components or the projected contents or views are available at this point . Hence @ViewChild @ViewChildren @ContentChildren @ContentChildren are not available to use
    */

    // this.templateRef will always be null as of reason above
    // console.log(this.templateRef.nativeElement.innerHTML);
  }
}
