import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrl: './dashboard-one.component.css'
})
export class DashboardOneComponent implements OnInit{

  name !: string;
  age !: string;

  constructor(private route : ActivatedRoute)
  {

  }


  ngOnInit(): void {
      
    this.name = this.route.params['name'];
  }

}
