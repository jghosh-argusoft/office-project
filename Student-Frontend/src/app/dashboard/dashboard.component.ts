import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { User } from '../shared/user.model';
import { UserListService } from '../user-list.service';
import { approvalDash } from '../shared/approvalDash.model';
import { AdminService } from '../admin.service';
import { Student } from '../shared/student.model';
import { Teacher } from '../shared/teacher.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {


  users: User[] = [];
  teacherapprovals: Teacher[] = [];

//for change detection
  teacherApprovalsSubject=new BehaviorSubject<Teacher[]>([]);
  teacherapprovals$ = this.teacherApprovalsSubject.asObservable();
  teacherListChanged = new Subject<Teacher[]>();



  showUsersList: boolean = false;

  constructor(private userListService: UserListService, private adminService: AdminService, private cdr: ChangeDetectorRef) { }

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

  showTeacherApprovalList() {
    this.showUsersList = false;
    this.adminService.getAllTeacherApprovals().subscribe(
      (data) => {
        console.log("====="+data)
        this.teacherapprovals = data;
      },
      (error) => {
        console.error('Error fetching approvals:', error);
      }
    )
  }

  deleteTeacherApprovals(username: String) {
    console.log("username"+username)
    this.adminService.deleteTeacherApprovals(username).subscribe(
      () => {
        console.log(`Approval with username ${username} deleted successfully.`);

        ///////////////////////
        const updateApprovals=this.teacherApprovalsSubject.value.filter(approval => approval.username!==username);
        this.teacherApprovalsSubject.next(updateApprovals);

        this.teacherListChanged.next(this.teacherapprovals.slice());
        this.cdr.detectChanges();
        /////////////////////////
      },
      (error) => {
        console.log(error);
      }
    )
  }

  approveTeacher(username: String) {
    this.adminService.approveTeacherApprovals(username).subscribe(
      (data) => {
        console.log("Data" + data)
        console.log(`Approval with username ${username} approved successfully.`);
      },
      (error) => {
        console.log(error)
      }
    )
  }

}