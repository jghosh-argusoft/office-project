import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserListService } from '../user-list.service';
import { Observable } from 'rxjs'; // Import the Observable class
import { SharedClass } from '../shared/shared-data.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent {
  verificationCode: string = '';
  verificationError: string = '';
  username: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userListService: UserListService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.username = params['username'];
      console.log("the username is  " + this.username);
    });
  }

  verifyUserAccount(verificationCodeInput: HTMLInputElement): void {
    const username = this.username;
    const verificationCode = verificationCodeInput.value;


   
    this.userListService.getVerificationCode(username).subscribe(
      (response: { verificationCode: string }) => {

        console.log("hello.........."+verificationCode,response.verificationCode)



        if (verificationCode===response.verificationCode) {
          this.userListService.verifyUserAccount(username).subscribe(
            (verify)=>{
              alert('Your account has been verified successfully');
            }
          );



          console.log('Verification code retrieved:', response.verificationCode);
          alert("user verified, please login")
          
         
          this.router.navigate(['login'])
        } else {
          console.error('Verification code not found in the response.');
        }
      },
      (error) => {
        console.error('Error fetching verification code:', error);

        if (error.error) {
          console.error('Detailed error:', error.error);
        }
      }
    );
  }

}











 //NOTE   the output from backend must output in json not in string (chekc if the output is like json or string)...........