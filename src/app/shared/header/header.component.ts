import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { MobileSubNavService } from "app/shared/mobile-sub-nav/mobile-sub-nav.service";

@Component({
  selector: 'lm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  userName: string;
  userRole: string;
  userLoggedIn: boolean;
  user: any;
  view: string;
  navState: boolean = false;
  constructor( private userSVC: UserService, private router: Router) {
   }

  ngOnInit() {
    this.user = this.userSVC.user
    this.userName = this.userSVC.userName
    this.userRole = this.userSVC.userRole
  }
  
   openMobileSubNav(){
    this.navState = true;
  }

  logout(){
    this.userSVC.logout();
    this.userLoggedIn = this.userSVC.userLoggedIn
    this.router.navigate(['/home']); 
    Promise.resolve(this.userSVC.logout())
        .then((res) => {
          return this.userLoggedIn = this.userSVC.userLoggedIn
        })
        .then((res) => {
          return this.userSVC.verifyUser();
        })
        .then((res) => {
          this.router.navigate(['/home'])
        });
  }
}
