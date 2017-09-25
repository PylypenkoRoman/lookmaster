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
  userName: string;
  userRole: any;
  view: string;
  navState: boolean = false;

  constructor( private userSVC: UserService, private router: Router) {
    this.authenticated = this.userSVC.getAuthenticated();
    this.userName = this.userSVC.getCurrentUserDisplayName();
    this.userRole = this.userSVC.userRole
  
  }

  ngOnInit() {

  }
  
  openMobileSubNav(){
    this.navState = true;
  }

  logout(){
    this.userSVC.logout();
  }
}
