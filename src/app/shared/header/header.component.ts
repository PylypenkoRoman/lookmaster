import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';

@Component({
  selector: 'lm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {
  authenticated: boolean;
  currentUser;
  userName: string;
  userRole: any;
  authState; any
  view: string;
  navState: boolean = false;

  constructor( private userSVC: UserService, private router: Router) {
    this.currentUser = this.userSVC.getCurrentUser();
    console.log("header info")
    console.log(this.currentUser)
    this.userRole = this.userSVC.userRole
  
  }

  ngOnInit() {

  }
  
  openMobileSubNav(){
    this.navState = true;
  }

  logout(){
    this.userSVC.logout();
    this.currentUser = null
  }
}
