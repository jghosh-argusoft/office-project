import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  verificationCode: string;
  verificationError: string;
  username: string; 


  
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.verificationCode = params['code'];
      this.username = params['username']; 
      this.verifyUserAccount(this.verificationCode, this.username);
    });
  }


  verifyUserAccount(verificationCode: string, username: string): void {
    this.http.put<any>(`http://localhost:8080/api/users/${username}/verify`, { verificationCode }).subscribe(
      response => {
        console.log('User account verified:', response);
        this.router.navigate(['/login']);
      },
      error => {
        this.verificationError = 'Invalid verification code. Please try again.';
        console.error('User account verification failed:', error);
      }
    );
  }

}
