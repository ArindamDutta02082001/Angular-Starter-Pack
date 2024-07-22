import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard-three',
  templateUrl: './dashboard-three.component.html',
  styleUrl: './dashboard-three.component.css',
})
export class DashboardThreeComponent implements OnInit {
  name!: string | null;
  age!: number | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    // const state1 = this.route.paramMap.pipe(map(() => history.state));
    // state1.subscribe((e) => {
    //   this.name = e['myInfo'].name;
    //   this.age = e['myInfo'].age;
    // });

    // or

    const state = history.state.myInfo;
    this.name = state.name;
    this.age = state.age;
  }
}
