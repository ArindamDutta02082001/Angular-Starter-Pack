import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  product = {
    name: 'Dummy Product',
    price: 49.99,
    quantity: 1,
  };

  user = {
    name: '',
    email: '',
    address: '',
  };

  constructor() {}

  onSubmit() {
    // Here you can handle the form submission
    console.log('Order placed:', this.user, this.product);
    alert('Order placed successfully!');
  }
}


