import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedClass } from '../shared/shared-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {


  constructor(private router: Router,private shareData: SharedClass, private activatedRoute: ActivatedRoute) {
  }
 
  navigationItems:{text:String,route:String}[]=[
    {text:"Home",route:"/home"},
    {text:"Dashboard",route:"/dashboard"},
    {text:"Logout",route:"/logout"},
   ]

   isLoggedIn(){
    return this.shareData.getLoginStat();
   }



}
