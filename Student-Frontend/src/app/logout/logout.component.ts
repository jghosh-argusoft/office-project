import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedClass } from '../shared/shared-data.service';

@Component({
  selector: 'app-logout',
  template: `
    <div>
      <h3>Logging out .............</h3>
    </div>
  `,
})
export class LogoutComponent implements OnInit {
  loggingOut = true;

  constructor(private router: Router, private shareData: SharedClass) {}

  ngOnInit() {
    this.shareData.setLoginStatus(false);

    setTimeout(() => {
      this.loggingOut = false;
      this.router.navigate(['/login']);
    }, 2000);
}
}
