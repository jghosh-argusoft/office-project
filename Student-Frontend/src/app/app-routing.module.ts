import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'signup',component:SignupComponent},
  {path: 'verify',component: VerifyComponent},
  {path:'login',component: LoginComponent},
  {path:'logout',component: LogoutComponent},
  {path:'studentForm',component:StudentFormComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
