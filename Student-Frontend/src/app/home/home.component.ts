import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../shared/user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { AdminService } from '../admin.service';
import { Teacher } from '../shared/teacher.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('open', style({
        transform: 'translateY(0)',
        opacity: 1,
      })),
      state('closed', style({
        transform:'translateY(-100%)',
        opacity: 0,
      })),
      transition('open <=> closed', [
        animate('3s ease-in-out'),
      ]),
    ]),
  ]
})
export class HomeComponent implements OnInit {

  showTeacherForm:Boolean=false;
  teacherForm: FormGroup;
  username: string = '';
  currentUser: User | undefined;
  // teacherForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private ulService: UserListService,
    private adminService: AdminService,
    private router: Router
  ) {this.teacherForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    username: ['', Validators.required],
    dob: ['', Validators.required],
    gender: [''],
    teachExp:['', Validators.required]
  });}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];

        this.ulService.getUserByUsername(this.username).subscribe(
          (user) => {
          
            this.currentUser = user;
            this.teacherForm.patchValue({
              firstname: this.currentUser.firstname,
              lastname: this.currentUser.lastname,
              email: this.currentUser.email,
              password: this.currentUser.password,
              username: this.currentUser.username,
              dob: new Date(this.currentUser.dob),
              gender: this.currentUser.gender,
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


  toTeacherForm() {
   this.showTeacherForm=!this.showTeacherForm
  }

  enrollTeacher() {
    if (this.teacherForm.valid) {
      const teacher:Teacher = this.teacherForm.value;
      console.log(teacher);
      teacher.approveStatus=false;
      this.adminService.createTeacher(teacher).subscribe(
        (response) => {
          alert("Teacher is successfully enrolled ");
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          console.error('User creation failed', error);
        }
      );
    }
    else{
      console.log("error")
    }
  }
}
