import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { User } from 'src/app/shared/user.model';
import { UserListService } from 'src/app/user-list.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  

  users: User[] = [];

  constructor(private userListService: UserListService, private adminService: AdminService, private cdr: ChangeDetectorRef, private http: HttpClient) { }

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


}
