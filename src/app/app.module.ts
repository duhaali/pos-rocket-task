import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { GridsterModule } from 'angular-gridster2';
import { WiddgetAComponent } from './widdget-a/widdget-a.component';
import { WiddgetBComponent } from './widdget-b/widdget-b.component';
import { ParentDynamicComponent } from './parent-dynamic/parent-dynamic.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { NumericWidgetComponent } from './numeric-widget/numeric-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    WiddgetAComponent,
    WiddgetBComponent,
    ParentDynamicComponent,
    NumericWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
