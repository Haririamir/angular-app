import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from 'src/material.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { AlarmsComponent } from './alarms/alarms.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsComponent } from './components/charts/charts.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import {
  DialogOverviewExample,
  DialogOverviewExampleDialog,
} from './alarms/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    AlarmsComponent,
    ReportsComponent,
    ChartsComponent,
    DialogOverviewExample,
    DialogOverviewExampleDialog,
  ],
  bootstrap: [AppComponent],
  providers: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    CanvasJSAngularChartsModule,
  ],
})
export class AppModule {}
