import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { Teacher } from 'src/app/shared/teacher.model';
import { UserListService } from 'src/app/user-list.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {

  teacherapprovals: Teacher[] = [];
  constructor(private userListService: UserListService, private adminService: AdminService, private cdr: ChangeDetectorRef, private http: HttpClient) { }


  showTeacherApprovalList() {
    
    this.adminService.getAllTeacherApprovals().pipe(
      tap((data) => {
        this.teacherapprovals = [...data];
        this.cdr.markForCheck();
      })
    ).subscribe(
      (response) => {console.log("The responese "+ JSON.stringify(response))},
      (error) => {
        console.error('Error fetching approvals:', error);
      }
    );
  }

/////////////
  deleteTeacherApprovals(username: string) {
    console.log("username" + username);
    this.adminService.deleteTeacherApprovals(username).pipe(
      tap((response) => {
        console.log(`Approval with username ${username} deleted successfully.`, JSON.stringify(response));
        this.teacherapprovals = this.teacherapprovals.filter((approval) => approval.username !== username);
        this.cdr.markForCheck();
        this.showTeacherApprovalList();
      }),
      catchError((error) => {
        console.log(error);
        // Handle error as per your requirement
        return throwError(error);
      })
    ).subscribe();
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
