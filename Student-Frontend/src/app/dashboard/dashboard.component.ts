import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { User } from '../shared/user.model';
import { UserListService } from '../user-list.service';
import { approvalDash } from '../shared/approvalDash.model';
import { AdminService } from '../admin.service';
import { Student } from '../shared/student.model';
import { Teacher } from '../shared/teacher.model';
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private userListService: UserListService, private adminService: AdminService, private cdr: ChangeDetectorRef, private http: HttpClient) { }

  @ViewChild(UserDashboardComponent) userDashboard!: UserDashboardComponent;
  @ViewChild(TeacherDashboardComponent) teacherDashboard!: TeacherDashboardComponent;

  fetchUsers() {
    if (this.userDashboard) {
      this.userDashboard.fetchUsers();
    }
  }
  showTeacherApprovalList(){
    if(this.teacherDashboard){
      this.teacherDashboard.showTeacherApprovalList()
    }
  }
  
  //for change detection
  // teacherApprovalsSubject=new BehaviorSubject<Teacher[]>([]);
  // teacherapprovals$ = this.teacherApprovalsSubject.asObservable();
  // teacherListChanged = new Subject<Teacher[]>();



  // showUsersList: boolean = false;


  // users: User[] = [];
  // teacherapprovals: Teacher[] = [];

  // fetchUsers() {
  //   this.userListService.getAllUsers().subscribe(
  //     (data) => {
  //       this.users = [...data]
  //       this.cdr.markForCheck()
  //     },
  //     (error) => {
  //       console.error('Error fetching users:', error);
  //     }
  //   );
  //   this.showUsersList = true;
  // }

  // the below is old one.............
  // // showTeacherApprovalList() {
  // //   this.showUsersList = false;
  // //   // this.adminService.getAllTeacherApprovals().subscribe(
  // //   //   (data) => {
  // //   //     console.log("====="+data)
  // //   //     this.teacherapprovals = [...data];
  // //   //     this.cdr.markForCheck()
  // //   //   },
  // //   //   (error) => {
  // //   //     console.error('Error fetching approvals:', error);
  // //   //   }
  // //   // )

  // //   return this.http.get<Teacher[]>('http://localhost:8080/api/admin/getAllTeacherApprovals')
  // //     .pipe(
  // //       map((teachers) => {
  // //         return teachers.map((teacher) => {
  // //           return {
  // //             ...teacher,
  // //             teachers: this.teacherapprovals ? this.teacherapprovals : []
  // //           };
  // //         });
  // //       }),
  // //       tap((teachers) => {
  // //         this.setTeachers(teachers);
  // //       })
  // //     );
  // //   // getAllTeacherApprovals(): Observable<Teacher[]> {
  // //   //   return this.http.get<Teacher[]>(`${this.apiUrl}/getAllTeacherApprovals`)
  // // }

  //below is updated..........
  // showTeacherApprovalList() {
  //   this.showUsersList = false;

  //   this.adminService.getAllTeacherApprovals().pipe(
  //     tap((data) => {
  //       this.teacherapprovals = [...data];
  //       this.cdr.markForCheck();
  //     })
  //   ).subscribe(
  //     (response) => { console.log("The responese " + JSON.stringify(response)) },
  //     (error) => {
  //       console.error('Error fetching approvals:', error);
  //     }
  //   );
  // }

  // /////////////
  // deleteTeacherApprovals(username: string) {
  //   console.log("username" + username);
  //   this.adminService.deleteTeacherApprovals(username).pipe(
  //     tap((response) => {
  //       console.log(`Approval with username ${username} deleted successfully.`, JSON.stringify(response));
  //       this.teacherapprovals = this.teacherapprovals.filter((approval) => approval.username !== username);
  //       this.cdr.markForCheck();
  //       this.showTeacherApprovalList();
  //     }),
  //     catchError((error) => {
  //       console.log(error);
  //       // Handle error as per your requirement
  //       return throwError(error);
  //     })
  //   ).subscribe();
  // }


  // approveTeacher(username: String) {
  //   this.adminService.approveTeacherApprovals(username).subscribe(
  //     (data) => {
  //       console.log("Data" + data)
  //       console.log(`Approval with username ${username} approved successfully.`);
  //     },
  //     (error) => {
  //       console.log(error)
  //     }
  //   )
  // }

}