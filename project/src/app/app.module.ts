import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header_Bindings/header.component';
import { DirectivesComponent } from './directives/directives.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { DataPassingComponent } from './data-passing/data-passing.component';
import { ConstructorComponent } from './lifecycle-hooks/constructor/constructor.component';
import { OnChangeComponent } from './lifecycle-hooks/on-change/on-change.component';
import { OnInitComponent } from './lifecycle-hooks/on-init/on-init.component';
import { NgDoCheckComponent } from './lifecycle-hooks/ng-do-check/ng-do-check.component';
import { NgAftercontentinitComponent } from './lifecycle-hooks/ng-aftercontentinit/ng-aftercontentinit.component';
import { BabyComponentComponent } from './lifecycle-hooks/ng-aftercontentinit/baby-component/baby-component.component';
import { NgAfterviewinitComponent } from './lifecycle-hooks/ng-afterviewinit/ng-afterviewinit.component';
import { BabyComponentViewComponent } from './lifecycle-hooks/ng-afterviewinit/baby-component-view/baby-component-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DirectivesComponent,
    NgContentComponent,
    LifecycleHooksComponent,
    DataPassingComponent,
    ConstructorComponent,
    OnChangeComponent,
    OnInitComponent,
    NgDoCheckComponent,
    NgAftercontentinitComponent,
    BabyComponentComponent,
    NgAfterviewinitComponent,
    BabyComponentViewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
