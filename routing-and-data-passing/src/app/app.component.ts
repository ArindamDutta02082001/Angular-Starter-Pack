import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  info = {
    name: 'John Doe',
    age: 30,
  };

  constructor(private router: Router) {}

  handleDashFour() {
    this.router.navigate(
      ['/dash-four', this.info.name, `age=${this.info.age}`],
      {
        state: { msg: 'state data passed' },
      }
    );
  }
}
