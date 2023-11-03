import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../user-list.service'; 
import { Router } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{


  signupForm: FormGroup;
  aFormGroup: FormGroup;
  captchaKey:string="6LcBo-8oAAAAAPv7JyKhfrPajZVOvhP68wOAPf5_"
  captchaCompleted:Boolean=false;

  public captchaIsLoaded=false;
  public captchaSuccess=false;
  public captchaIsExpired=false;
  public captchaResponse?:string;

  // public theme: 'light' | 'dark' = 'light';
  // public size: 'compact' | 'normal' = 'normal';
  // public lang = 'en';
  // public type: 'image' | 'audio'; 



  constructor(private fb: FormBuilder,private formBuilder: FormBuilder, private userService: UserListService,private router: Router,private el: ElementRef, private renderer: Renderer2) {
    this.signupForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [''] 
    });

    this.aFormGroup=this.formBuilder.group({
       recaptcha:['',Validators.required]
     })

   
  }

  
  // ngOnInit(): void {
  //   this.aFormGroup=this.formBuilder.group({
  //     recaptcha:['',Validators.required]
  //   })
  // }


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

  onCaptchaResolved(captchaResponse: any): void {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.captchaCompleted = true; 
  }
  
}
