import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserListService } from '../user-list.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup
  username: String = ""
  currentUser: User|undefined


  constructor(
    private fb: FormBuilder, // Inject the FormBuilder
    private activatedRoute: ActivatedRoute,
    private ulService: UserListService
  ) {

    this.studentForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      username: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['']
    });

  }


  // ngOnInit() {
  //   this.activatedRoute.queryParams.subscribe((params) => {
  //     if (params['username']) {
  //       this.username = params['username'];

  //       this.ulService.getUserByUsername(this.username).subscribe(
  //         (user) => {
  //           console.log(user);
  //           this.currentUser = user;
  //         },
  //         (error) => {
  //           alert('Error');
  //         }
  //       );
  //     }
  //   });

  // }
  
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];

        this.ulService.getUserByUsername(this.username).subscribe(
          (user) => {
            console.log(user);
            this.currentUser = user;

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
            alert('Error');
          }
        );
      }
    });
  }


  enrollStudent(){
    if(this.studentForm.valid){
      const user = this.studentForm.value;

    }


  }







}

