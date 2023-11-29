import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserListService } from '../user-list.service';
import { SharedClass } from '../shared/shared-data.service';

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
    private userListService: UserListService,
    private SharedData:SharedClass
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm.reset();
  }
  ngOnInit(){

    this.loginFailed=false;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
  
      this.userListService.getUserByUsername(username).subscribe(
        (user) => {
          if (user && user.password === password) {
            this.SharedData.setLoginStatus(true)

            //Set value in gloabal vatiable 
            this.SharedData.globalUsername.next({
              globalProperty: username
            })
          

            this.router.navigate(['/home'],{queryParams:{username:user.username}});
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
