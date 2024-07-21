import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrl: './dashboard-one.component.css',
})
export class DashboardOneComponent implements OnInit {
  name!: string | null;
  age!: string | null;

  paramMapsObs: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // ------------------- capturig the path values  ------------------
    this.paramMapsObs = this.route.paramMap.subscribe((params) => {
      this.name = params.get('name');
      this.age = params.get('age');
    });

    // old method
    // this.name = this.route.snapshot.params['name'];
    // this.age = this.route.snapshot.params['age'];
  }

  // always good practice to unsubs a observable
  ngOnDestroy(): void {
    this.paramMapsObs.unsubscribe();
  }
}
