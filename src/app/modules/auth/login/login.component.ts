import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/modules/auth.service';
import { ErrorHandlerService } from '../../../services/help/error-handler.service';
import { MzToastService } from 'ngx-materialize';
import { Router } from "@angular/router";
import * as $ from "jquery";
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {email: '', password: ''};
  loginForm: FormGroup;

  constructor(
    private _auth: AuthService, 
    private _errHandler: ErrorHandlerService,
    private toastService: MzToastService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      'email': new FormControl(this.login.email, [Validators.required]),
      'password': new FormControl(this.login.password, Validators.required)
    });
  }

  Login(){
    this._auth.Login(this.login.email, this.login.password)
    .subscribe( data => {
      localStorage.setItem("token", data.token);
      this.router.navigate(['/dashboard']);
    }, err => {
      this.showToast(err);
    });
  }

  showToast(ms, err = true){
    $('#toast-container').find('.toast').remove();
    this.toastService.show(
      (err) ? this._errHandler.Error_Handler(ms) : ms
    , 4000, 'red');
  }

  ngOnInit() {
  }

}
