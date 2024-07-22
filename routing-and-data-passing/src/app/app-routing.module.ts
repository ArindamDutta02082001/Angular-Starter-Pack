import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './pages/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './pages/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './pages/dashboard-three/dashboard-three.component';
import { DashboardFourComponent } from './pages/dashboard-four/dashboard-four.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './protected-pages/checkout/checkout.component';
import { AuthServiceService } from './services/auth-service/auth-guard-service.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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
    children: [{ path: ':name', component: DashboardFourComponent }],
  },

  // protected routes
  // have to login then only we can go to this routes

  {
    path: 'checkout',
    component: LayoutComponent,
    children: [{ path: 'pay', component: CheckoutComponent }],
    canActivate: [AuthServiceService],
    // if you use canActivate then you cannt open even parent path /checkout i.e it protects both the parent + child routes

    // if you use canActivateChild , then you can open the parent /checkout but not the /checkout/path  i.e it protects the child routes only
    // canActivateChild: [AuthServiceService],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
