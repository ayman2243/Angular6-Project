import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzInputModule, MzToastModule } from 'ngx-materialize';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule,
    MzButtonModule, MzInputModule,
    FormsModule, ReactiveFormsModule,
    MzToastModule
  ],
  declarations: [LoginComponent, LogoutComponent]
})
export class AuthModule { }
