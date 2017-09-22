import { Injectable } from '@angular/core';
import { Router, Resolve } from '@angular/router'
import { UserService } from './user.service';

@Injectable()
export class AuthResolver implements Resolve<any> {

  constructor(private userSVC: UserService) {}

  resolve() {
    // return this.userSVC.getAuthState()
  }
}