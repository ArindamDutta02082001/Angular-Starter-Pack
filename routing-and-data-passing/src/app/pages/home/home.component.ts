import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  info = {
    name: 'John Doe',
    age: 30,
  };

  constructor(private router: Router) {}

  handleDashFour() {
    // navigate takes the first array with elements , that has to be in the URL
    // and the second is the state object
    this.router.navigate(
      ['/dash-four', this.info.name, `age=${this.info.age}`],
      {
        state: { msg: 'state data passed' },
      }
    );
  }
}
