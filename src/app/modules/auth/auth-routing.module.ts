import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from "app/modules/auth/signup/signup.component";
import { LoginComponent } from "app/modules/auth/login/login.component";

import { SignupFormComponent } from "app/modules/auth/signup/signup-form/signup-form.component";

const authRoutes: Routes = [
  {
    path: 'signup',
     children: [
      { path: '', component: SignupComponent },
      { path: 'form', component: SignupFormComponent }]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthRoutingModule{}

