import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetrialModule } from '../metrial/metrial.module';
import {FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { DummyComponent } from './dummy/dummy.component'
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { CompleteTableComponent } from './complete-table/complete-table.component';


@NgModule({
  declarations: [DashboardComponent, NavComponent, DummyComponent, FormComponent, CompleteTableComponent],
  exports:[DashboardComponent,NavComponent, DummyComponent, FormComponent, CompleteTableComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MetrialModule,
    FormsModule,
    RouterModule
  ]
})
export class DashModule { }
