import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';


@NgModule({
  declarations: [
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonModule,
  ]
})
export class DashboardModule { }
