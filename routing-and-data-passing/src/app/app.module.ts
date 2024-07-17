import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardOneComponent } from './pages/dashboard-one/dashboard-one.component';
import { DashboardTwoComponent } from './pages/dashboard-two/dashboard-two.component';
import { DashboardThreeComponent } from './pages/dashboard-three/dashboard-three.component';
import { HeaderComponent } from './common-pages/header/header.component';
import { FooterComponent } from './common-pages/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardOneComponent,
    DashboardTwoComponent,
    DashboardThreeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
