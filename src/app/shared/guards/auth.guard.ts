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

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {

    if(this.userSVC.getAuthenticated()){ return true; }
    this.router.navigate(['/login']);

    // return this.userSVC.getCurrentUserObservable
    //   .take(1)
    //   .map(user => !!user)
    //   .do(loggedIn => {
    //     if (!loggedIn) {
    //       console.log("access denied")
    //       this.router.navigate(['/login']);
    //     }
    // })
  }
}
    


