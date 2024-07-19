import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './pages/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './pages/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './pages/dashboard-three/dashboard-three.component';
import { DashboardFourComponent } from './pages/dashboard-four/dashboard-four.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', redirectTo : "home",component: AppComponent },       redirectTo is used to redirect incoming request to a different path
  { path: 'dash-one/:name/:age', component: DashboardOneComponent },
  { path: 'dash-two', component: DashboardTwoComponent },
  { path: 'dash-three', component: DashboardThreeComponent },
  { path: 'dash-four/:name/age=:age', component: DashboardFourComponent },
  // wild-card route path for 404 not found
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
