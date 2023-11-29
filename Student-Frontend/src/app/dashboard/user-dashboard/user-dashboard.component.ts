import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, Subscribable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { SharedClass } from 'src/app/shared/shared-data.service';
import { User } from 'src/app/shared/user.model';
import { UserListService } from 'src/app/user-list.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {



  constructor(private userListService: UserListService, private adminService: AdminService, private cdr: ChangeDetectorRef, private http: HttpClient,
    private sharedClass: SharedClass) { }


  users: User[] = [];

  fetchUsers() {
    this.userListService.getAllUsers().subscribe(
      (data) => {
        this.users = [...data]
        this.cdr.markForCheck()
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  globalUsername: Observable<any>


  ngOnInit(): void {
    console.log("UserDashboard called ")
    this.fetchUsers();

    this.sharedClass.globalUsername.subscribe({
      next:newValue=>console.log("The username fetched fro mgloba lvariable "+JSON.stringify(newValue))
    })

  }


}
