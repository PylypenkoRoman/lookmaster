import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from "app/shared/shared.module";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from "app/modules/auth/auth-routing.module";
import { SignupFormComponent } from './signup/signup-form/signup-form.component';




@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, 
    SignupComponent, SignupFormComponent]
})

export class AuthModule { }
