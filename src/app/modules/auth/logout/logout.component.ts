import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/modules/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private _auth: AuthService, 
    private router: Router) { 
    }

  ngOnInit() {
    this.logout();
  }

  logout(){
    this._auth.Logout(localStorage.getItem('token')).subscribe(
      (done) => {
          console.log("done", done);
          localStorage.clear();
          this.router.navigate(['login']);
      },
      (err) => {
        console.log("err in logout component", err);
        localStorage.clear();
        this.router.navigate(['login']);
      }
    );
  }

}
