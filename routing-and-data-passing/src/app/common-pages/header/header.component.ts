import { Component } from '@angular/core';
import LoginService from '../../services/login-service/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  val: any = { exact: true };

  constructor(private loginService: LoginService) {}

  logoutUser() {
    this.loginService.logoutUser();
  }
}
