import { Component } from '@angular/core';
import { UserListService } from '../user-list.service';
import { User } from '../shared/user.model';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
username:String=""

constructor(private activatedRoute: ActivatedRoute,private userListService:UserListService)
{
  this.activatedRoute.queryParams.subscribe(params=>{
    if(params['username']){
      this.username=params['username'];
      console.log(this.username)
    }
  })
}

}

