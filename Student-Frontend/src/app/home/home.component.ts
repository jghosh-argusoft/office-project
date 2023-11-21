import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../shared/user.model';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  username: string = '';
  currentUser: User | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ulService: UserListService,
    private modalServices: NgbModal,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['username']) {
        this.username = params['username'];

        this.ulService.getUserByUsername(this.username).subscribe(
          (user) => {
            console.log(user);
            this.currentUser = user;
          },
          (error) => {
            alert('Error');
          }
        );
      }
    });
  }

  toStudentFormCompo() {
    const navigationExtras = {
      queryParams: { username: this.username },
    };

    this.router.navigate(['/studentForm'], navigationExtras);
  }
  
}
