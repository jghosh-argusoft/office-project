import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
  })
export class SharedClass{
    private isLoggedIn:boolean=false;
    loginStatusChanged=new Subject<boolean>();

    setLoginStatus(isLoggedIn:boolean){
        this.isLoggedIn=isLoggedIn;
        this.loginStatusChanged.next(isLoggedIn);    
    }

getLoginStat(){
    return this.isLoggedIn;
}
    

}