import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './shared/user.model';
import { approvalDash } from './shared/approvalDash.model';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private baseUrl: string = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/`);
  }

  getUserByUsername(username: String): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }


  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/`, user);
  }

  getVerificationCode(username: string): Observable<any> {

    //below is to send th username conversion in URI
    const encodedUsername = encodeURIComponent(username);
    return this.http.get<any>(`${this.baseUrl}/${encodedUsername}/verificationCode`);
    //     If the username contains special characters like @, it needs to be properly URL-encoded to ensure it is interpreted correctly by the server.
    // You can use encodeURIComponent to encode the username before appending it to the URL. Modify your code like this:
  }


  verifyUserAccount(username: string): Observable<any> {
    const requestBody = {};
    return this.http.put<User>(`${this.baseUrl}/${username}/verify`, requestBody);
  }





 



}


