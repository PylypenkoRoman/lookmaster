import { Component } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router/";

@Component({
  selector: 'lm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent {
  email: string;
  password1: string;

  constructor(private userSVC: UserService, private router: Router) {}

  login(){  
    Promise.resolve(this.userSVC.login(this.email, this.password1))
        // .then((res) => {
        //   return this.userSVC.checkLoggedState();
        // })
        .then((res) => {
          return this.userSVC.verifyUser();
        })
        .then((res) => {
          return this.userSVC.getUserData();
        })
        .then((res) => {
          this.router.navigate(['/home'])
        });
  }
  cancel(){
    this.router.navigate(['/home'])
  }
}
 