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
import { NgxCaptchaModule } from 'ngx-captcha';
import { VerifyComponent } from './signup/verify/verify.component';

// import { RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module,RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';
// import { NgxCaptchaModule } from 'ngx-captcha';
// import { ReCaptchaV3Service } from 'ngx-captcha';
// import { environment } from './environment';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    NgxCaptchaModule

  ],
  providers: [UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
