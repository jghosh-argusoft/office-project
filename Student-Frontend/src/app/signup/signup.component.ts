import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../user-list.service'; 
import { Router } from '@angular/router';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserListService,private router: Router,private reCaptchaV3Service: ReCaptchaV3Service,private el: ElementRef, private renderer: Renderer2) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [''] 
    });
    // this.aFormGroup = this.fb.group({
    //   recaptcha: ['', Validators.required], 
    // });
    

    // this.captcha='';
    
  }

  onSubmit() {
    if (this.signupForm.valid) {
     
      const user = this.signupForm.value;
      this.userService.createUser(user).subscribe(
        (response) => {
          console.log('User created:', response);
          this.router.navigate(['/login'])
        },
        (error) => {
          console.error('User creation failed:', error);
        }
      );
    }
    
  }



  // resolve(captchaResponse: string){
  //   this.captcha=captchaResponse;
  //   console.log('resolved captcha with responses:'+this.captcha);
  // }
}
