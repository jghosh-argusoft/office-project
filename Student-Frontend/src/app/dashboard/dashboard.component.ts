import { Component } from '@angular/core';
import { User } from '../shared/user.model';
import { UserListService } from '../user-list.service';
import { approvalDash } from '../shared/approvalDash.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  users: User[] = [];
  approvals: approvalDash[] = [];
  showUsersList: boolean = false;

  constructor(private userListService: UserListService, private adminService: AdminService) { }

  fetchUsers() {
    this.userListService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
    this.showUsersList = true;
  }

  showApprovalList() {
    this.showUsersList = false;
    this.adminService.getAllApprovals().subscribe(
      (data) => {
        this.approvals = data;
      },
      (error) => {
        console.error('Error fetching approvals:', error);
      }
    )
  }

  deleteApprovals(username: String) {
    this.adminService.deleteApprovals(username).subscribe(
      () => {
        console.log(`Approval with username ${username} deleted successfully.`);
        // Optionally, you can perform additional actions or update your component state.
      },
      (error)=>{
        console.log(error);
      }
    )
  
  }

  approveUser(username:String) {
    throw new Error('Method not implemented.');
  }

}