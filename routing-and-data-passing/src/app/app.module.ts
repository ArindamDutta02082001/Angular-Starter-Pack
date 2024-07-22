import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardOneComponent } from './pages/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './pages/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './pages/dashboard-three/dashboard-three.component';
import { HeaderComponent } from './common-pages/header/header.component';
import { FooterComponent } from './common-pages/footer/footer.component';
import { DashboardFourComponent } from './pages/dashboard-four/dashboard-four.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './protected-pages/checkout/checkout.component';
import { LoginComponent } from './login/login.component';

import LoginService from './services/login-service/login-service.service';
import { AuthServiceService } from './services/auth-service/auth-guard-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardOneComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardFourComponent,
    NotFoundComponent,
    LayoutComponent,
    HomeComponent,
    CheckoutComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(),
    AuthServiceService,
    LoginService,
    // services we define here
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
