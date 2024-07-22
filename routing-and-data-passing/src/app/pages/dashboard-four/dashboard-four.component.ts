import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-four',
  templateUrl: './dashboard-four.component.html',
  styleUrl: './dashboard-four.component.css',
})
export class DashboardFourComponent implements OnInit {
  name!: string | null;
  age!: string | null;
  stateMssg !: string | null ;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // for path variables
    this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
    });

    // for query params
    this.route.queryParamMap.subscribe((params) => {
      this.age = params.get('age');
    });

    // for state
    this.stateMssg = history.state.msg;

  }
}
