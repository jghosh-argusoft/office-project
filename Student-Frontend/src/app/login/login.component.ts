import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginFailed:boolean=false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userListService: UserListService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit(){
    this.loginForm.reset();
    this.loginFailed=false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
  
      this.userListService.getUserByUsername(username).subscribe(
        (user) => {
          if (user && user.password === password) {
            this.router.navigate(['/home']);
          } else {
            console.log('Authentication failed. Please check your credentials.');
            this.loginFailed=true;
          }
        },
        (error) => {
          console.error('User retrieval failed:', error);
          this.loginFailed=true
        }
      );
    }
  }
  
}
