import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'lm-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.styl']
})

export class SignupComponent implements OnInit{
  userRole: string
  signUpFormView: boolean = false

  ngOnInit(): void {
    this.userRole = localStorage.getItem('savedUserRole');
  }

  saveRole(userRole){
     console.log(userRole); // updated value
     localStorage.setItem('savedUserRole', this.userRole);
  }
}
