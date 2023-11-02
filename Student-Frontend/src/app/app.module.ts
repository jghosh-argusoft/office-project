import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListService } from './user-list.service';
import { HttpClientModule } from '@angular/common/http';

import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReCaptchaV3Service } from 'ngx-captcha';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    RecaptchaModule,
    NgxCaptchaModule,
    RecaptchaFormsModule,
  ],
  providers: [UserListService,ReCaptchaV3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
