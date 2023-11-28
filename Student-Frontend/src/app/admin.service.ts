import { Injectable } from "@angular/core";
import { approvalDash } from "./shared/approvalDash.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Student } from "./shared/student.model";
import { Teacher } from "./shared/teacher.model";

@Injectable({
  providedIn: 'root',
})
export class AdminService {



  private apiUrl = 'http://localhost:8080/api/admin';

  constructor(private http: HttpClient) { }


  createTeacher(teacher: Teacher): Observable<Teacher> {
    console.log("User before HTTP request:", teacher);
    return this.http.post<Teacher>(`${this.apiUrl}/createTeacher`, teacher);
  }

  // getStudentApprovals(): Observable<Student[]> {
  //   return this.http.get<Student[]>(`${this.apiUrl}/getAllStudentApprovals`)
  // }
  // getAllTeacherApprovals(): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(`${this.apiUrl}/getAllTeacherApprovals`)
  // }

  // getAllApprovals(): Observable<approvalDash[]> {
  //     return this.http.get<approvalDash[]>(`${this.apiUrl}/getAllApprovals`);
  // }

  deleteTeacherApprovals(username: String): Observable<Teacher> {
    console.log("username 2 "+username)
    return this.http.delete<Teacher>(`${this.apiUrl}/deleteTeacherApproval/${username}`)
  }


  approveTeacherApprovals(username: String): Observable<any> {
    console.log("before api call in approva approvals " + username)

    return this.http.put<approvalDash>(`${this.apiUrl}/approveTeacherApproval/${username}`, {});
  }

  getAllTeacherApprovals() {
    return this.http.get<Teacher[]>('http://localhost:8080/api/admin/getAllTeacherApprovals');
  }
}
