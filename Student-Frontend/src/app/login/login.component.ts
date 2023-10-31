import { Component, Injectable } from '@angular/core';
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

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // Check if the user exists in the user list
      const user = this.userListService.getUserByUsername(username);

      if (user && user.password === password) {
        // Authentication successful, navigate to the "home" route
        this.router.navigate(['/home']);
      } else {
        // Authentication failed, you can show an error message
        console.log('Authentication failed. Please check your credentials.');
      }
    }
  }
}
