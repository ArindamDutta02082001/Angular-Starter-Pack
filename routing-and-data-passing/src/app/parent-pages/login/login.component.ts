import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import AuthServiceService from '../../services/login-service/login-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('uid') userid!: ElementRef;
  @ViewChild('pwd') passcode!: ElementRef;

  constructor(private route: Router, private authService: AuthServiceService) {}

  onLoginClicked() {
    let username = this.userid.nativeElement.value;
    let password = this.passcode.nativeElement.value;

    if (this.authService.loginUser(username, password)) {
      alert('logged in');
      this.route.navigate(['/checkout/pay']);
    } else alert('invalid');
  }
}
