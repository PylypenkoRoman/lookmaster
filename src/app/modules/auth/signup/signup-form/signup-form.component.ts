import { Component } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router/";

@Component({
  selector: 'lm-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.styl']
})
export class SignupFormComponent {

email: string;
password1: string;
password2: string;
passwordFail: boolean = false;
userRole: string = localStorage.getItem('savedUserRole');
userName: string
  
  constructor(private userSVC: UserService, private router: Router) {}

  signUp(){
    if(this.password1 != this.password2){
      this.passwordFail = true;
    }
    else{
      this.passwordFail = false;
      Promise.resolve(this.userSVC.register(this.email, this.password1, this.userName))
        .then((res) => {
          return this.userSVC.getCurrentUserRole();
        })
        // .then((res) => {
        //   if(this.userRole == "master"){
        //     console.log("master card created");
        //     this.userSVC.createMasterCard()
        //   }else{
        //     console.log("user not a master - we don't need master card");
        //   }
        // })
        .then((res) => {
          console.log("we will navigaet you on home page");
          this.router.navigate(['/home'])
        });
    }
  }
  cancel(){
    this.router.navigate(['/signup/name'])
  }
}
