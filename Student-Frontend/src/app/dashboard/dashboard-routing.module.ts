import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

const routes: Routes = [
  {
    path: 'userDashboard', loadChildren: () => import('./user-dashboard/user-dashboard.component').then(mod => mod.UserDashboardComponent)
  },
  {
    path: 'teacherDashboard', loadChildren: () => import('./teacher-dashboard/teacher-dashboard.component').then(mod => mod.TeacherDashboardComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
