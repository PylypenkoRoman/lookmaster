import { Injectable } from '@angular/core';
import { CanActivate,
          Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot 
       } from '@angular/router'
import * as firebase from 'firebase';
import { Profile } from "./profile";



@Injectable()
export class ProfileService {
  user: any;
  profile: any;
  


getProfile2() {
  let user = firebase.auth().currentUser;
   firebase.database().ref('/users/' + user.uid).once('value')
    .then((snapshot) => snapshot.val())
     .then((snapshot) => snapshot.json())
}; 



}