import { Injectable } from '@angular/core';
import {  Router,
          ActivatedRouteSnapshot,
          RouterStateSnapshot 
       } from '@angular/router'
import * as firebase from 'firebase';
import { Profile } from "./profile";
import { UserService } from "app/shared/services/user.service";

@Injectable()

export class ProfileService {
currentUserId;
profile: Profile[]


constructor( private userSVC: UserService, private router: Router) {
    this.currentUserId = this.userSVC.getCurrentUserId();
    this.getProfile()
}

getProfile(){
    let dbRef = firebase.database().ref('users/' + this.currentUserId);
    dbRef.once('value')
        .then((snapshot)=> {
        this.profile = snapshot.val(); 
        });
}

editProfile(update: Profile){
    let dbRef = firebase.database().ref('users/').child(this.currentUserId)
        .update({
          userName: update.userName,
          city: update.city,
          about: update.about,
          email: update.email,
          phone: update.phone,
          payType: update.payType,
          salonAddress: update.salonAddress,
          homeAddress: update.homeAddress,
          workAtClientHome: update.workAtClientHome
        });
      alert('profile edited');  
  }

}

