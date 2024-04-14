import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-basic',
  templateUrl: './template-form-basic.component.html',
  styleUrl: './template-form-basic.component.css',
})
export class TemplateFormBasicComponent {

  rangeupdate !:number;


  // method 1 : accessing form data
  onSubmit(form: NgForm) {
    console.log('The entire form object :');
    console.log(form);

    console.log('The form controls are :');
    console.log(form.controls);

    if (form.valid) {
      
      console.log('Form is valid :', form.valid);
      console.log('****************************');
      console.log('Form submitted :', form.value);
    }
  }

  // method 2 : using @viewChild

  // @ViewChild('myForm') form!: NgForm;
  // onSubmit()        // dont pass anything in onSubmit() in html
  //  {
  //   console.log('ok');
  //   console.log(this.form);
  //   console.log(this.form.value);
  //   console.log(this.form.controls);

  //   if (this.form.valid) {
  //     console.log('Form submitted:', this.form.value);
  //   }
  // }

  // ********************************* custom formgroup ********************************************************
  onSubmit2(form: NgForm) {
    console.log('The entire form object :');
    console.log(form);

    console.log('The form controls are :');
    console.log(form.controls);

    if (form.valid) {
      console.log('Form is valid :', form.valid);
      console.log('****************************');
      console.log('Form submitted :', form.value);
    }
  }
}
