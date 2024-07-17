import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashOneComponent } from './dash-one/dash-one.component';
import { DashTwoComponent } from './dash-two/dash-two.component';
import { DashThreeComponent } from './dash-three/dash-three.component';
import { DashFourComponent } from './dash-four/dash-four.component';
const routes: Routes = [
  { path: '', component: ChooseOptionComponent },
  { path: 'dash-one/:name/:age', component: DashOneComponent },
  { path: 'dash-two', component: DashTwoComponent },
  { path: 'dash-three', component: DashThreeComponent },
  { path: 'dash-four/:name/age=:age', component: DashFourComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
