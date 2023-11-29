import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListService } from './user-list.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxCaptchaModule } from 'ngx-captcha';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';


// import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module,RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
// import { NgxCaptchaModule } from 'ngx-captcha';
// import { ReCaptchaV3Service } from 'ngx-captcha';
// import { environment } from './environment';
import { SignupComponent } from './signup/signup.component';
import { VerifyComponent } from './verify/verify.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './dashboard/teacher-dashboard/teacher-dashboard.component';

import {ShortenPipe} from 'src/app/shared/shorten.pipe'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VerifyComponent,
    LogoutComponent,
    DashboardComponent,
    UserDashboardComponent,
    TeacherDashboardComponent,
    ShortenPipe
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxCaptchaModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    CommonModule,

  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
