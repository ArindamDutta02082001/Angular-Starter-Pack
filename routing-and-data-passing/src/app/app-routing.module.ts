import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './pages/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './pages/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './pages/dashboard-three/dashboard-three.component';
import { DashboardFourComponent } from './pages/dashboard-four/dashboard-four.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'dash-one',
    component: LayoutComponent,
    children: [{ path: ':name/:age', component: DashboardOneComponent }],
  },
  {
    path: 'dash-two',
    component: LayoutComponent,
    children: [{ path: '', component: DashboardTwoComponent }],
  },
  {
    path: 'dash-three',
    component: LayoutComponent,
    children: [{ path: '', component: DashboardThreeComponent }],
  },
  {
    path: 'dash-four',
    component: LayoutComponent,
    children: [{ path: ':name/age=:age', component: DashboardFourComponent }],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
