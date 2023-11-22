import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../user-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { approvalDash } from '../shared/approvalDash.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  username: string = "";
  currentUser: User | undefined;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ulService: UserListService,
    private adminService: AdminService,
    private router: Router,
  ) {
    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: [''],
      graduation: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];

        this.ulService.getUserByUsername(this.username).subscribe(
          (user) => {
            console.log(user);
            this.currentUser = user;
            console.log("The DOB :" + this.currentUser.dob)

            this.studentForm.patchValue({
              firstname: this.currentUser.firstname,
              lastname: this.currentUser.lastname,
              email: this.currentUser.email,
              password: this.currentUser.password,
              username: this.currentUser.username,
              dob: new Date(this.currentUser.dob),
              gender: this.currentUser.gender
            });
          },
          (error) => {
            console.error('Error:', error);
            alert('Error');
          }
        );
      }
    });
  }

  enrollStudent() {
    if (this.studentForm.valid) {
      const user:approvalDash = this.studentForm.value;
      console.log(user);
      user.role="student"
      
      this.adminService.createApproval(user).subscribe(
        (response) => {
          alert("You have successfully enrolled ");
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('User creation failed', error);
        }
      );
    }
  }

}
