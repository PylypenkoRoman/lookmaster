import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userSVC: UserService, private router: Router) {
}
  canActivate(): Observable<boolean> | boolean {
    if(this.userSVC.getCurrentUser()) {
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}