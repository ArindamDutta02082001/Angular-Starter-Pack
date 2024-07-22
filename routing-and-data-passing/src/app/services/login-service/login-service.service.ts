import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  isLoggedIn!: boolean;

  users: any[] = [
    { id: 1, name: 'a', pwd: 'a' },
    { id: 2, name: 'john', pwd: 'john123' },
    { id: 3, name: 'arindam', pwd: 'arindam@123' },
  ];

  constructor(private router: Router) {}

  loginUser(username: string, password: string) {
    let user = this.users.find((e) => {
      if (e.name == username && e.pwd == password) return e;
    });

    if (user != undefined) this.isLoggedIn = true;

    return this.isLoggedIn;
  }

  logoutUser() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
