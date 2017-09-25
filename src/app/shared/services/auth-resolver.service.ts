import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'
import { UserService } from './user.service';

@Injectable()
export class AuthResolver implements Resolve<any> {

  constructor(private userSVC: UserService) {}

  resolve(): Promise<any>{
    var authenticated
    return new Promise<any>(resolve => setTimeout(resolve, 200))
    .then(() => {
      authenticated = this.userSVC.getAuthenticated();
      return authenticated
    })
  }
}