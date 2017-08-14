import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'lm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.styl']
})
export class NavbarComponent implements OnInit {
  theUser: string;

  constructor( private userSVC: UserService, private router: Router) { }

  ngOnInit() {

  }
  
}
