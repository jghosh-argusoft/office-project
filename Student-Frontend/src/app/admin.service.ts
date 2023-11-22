import { Injectable } from "@angular/core";
import { approvalDash } from "./shared/approvalDash.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class AdminService {

    private apiUrl = 'http://localhost:8080/api/admin';

    constructor(private http: HttpClient) { }

    createApproval(user: approvalDash): Observable<approvalDash> {
        console.log("User before HTTP request:", user);
        return this.http.post<approvalDash>(`${this.apiUrl}/createapprove`, user);
    }


    getAllApprovals(): Observable<approvalDash[]> {
        return this.http.get<approvalDash[]>(`${this.apiUrl}/getAllApprovals`);
    }

  deleteApprovals(username:String): Observable<any>{
    return this.http.delete(`${this.apiUrl}/delete/${username}`)
  }
}