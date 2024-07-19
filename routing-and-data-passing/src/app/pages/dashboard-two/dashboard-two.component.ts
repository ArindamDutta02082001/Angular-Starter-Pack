import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-two',
  templateUrl: './dashboard-two.component.html',
  styleUrl: './dashboard-two.component.css',
})
export class DashboardTwoComponent implements OnInit, OnDestroy {
  name!: string | null;
  age!: string | null;

  queryParamMapsObs : any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.queryParamMapsObs = this.route.queryParamMap.subscribe((params) => {
      this.name = params.get('name');
      this.age = params.get('age');
    });

    // old method
    // this.name = this.route.snapshot.queryParam['name'];
    // this.age = this.route.snapshot.queryParam['age'];
  }


  // always good practice to unsubs a observable
  ngOnDestroy(): void
  {
     this.queryParamMapsObs.unsubscribe();
  }
}
