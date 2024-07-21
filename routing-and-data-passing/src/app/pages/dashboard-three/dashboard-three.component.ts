import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  styleUrl: './dashboard-three.component.css',
})
export class DashboardThreeComponent implements OnInit {
  name!: string | null ;
  age!: number | null ;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const state = this.router.getCurrentNavigation()?.extras.state ;
    console.log(state);

    if (state) {
      this.name = state['name'];
      this.age = state['age'];
    }
  }
}
