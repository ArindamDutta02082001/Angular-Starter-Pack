import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthServiceService from '../../services/login-service/login-service.service';

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

  constructor(
    private router: Router,
    private authservice: AuthServiceService
  ) {}

  handleDashFour() {
    // navigate takes the first array with elements , that has to be in the URL , and the second is the state object
    this.router.navigate(
      ['/dash-four', this.info.name],
      {
        state: { msg: 'state data passed' },
        queryParams : { age : this.info.age}
      }
    );
  }
}
