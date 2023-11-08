import { Component } from '@angular/core';
import { User } from '../shared/user.model';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
approveUser() {
throw new Error('Method not implemented.');
}
rejectUser() {
throw new Error('Method not implemented.');
}
  users: User[] = [];

  constructor(private userListService: UserListService) {}

  fetchUsers() {
    this.userListService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
