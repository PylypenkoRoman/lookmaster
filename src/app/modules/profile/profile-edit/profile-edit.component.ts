import { Component, OnInit } from '@angular/core';
import { ProfileService } from "app/modules/profile/profile.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { UserService } from "app/shared/services/user.service";
import { Profile } from "../profile";

@Component({
  selector: 'lm-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.styl']
})
export class ProfileEditComponent implements OnInit {
  profile: any
  profile2: any
  data: Profile = {
    userName: "Roman Pylypenko",
    userRole: "master",
    city: "Lviv",
    about: "Роблю чоловічі, жіночі та дитячі зачіски",
  }
  
  constructor( private profileSVC: ProfileService, private router: Router ) { }

  ngOnInit() {
    
    this.profile = this.getProfile()
    this.profile2 = this.profileSVC.getProfile2()
    console.log(this.profile)
    console.log(this.profile2)
  }
  getProfile(){
    return this.profile = this.data
  }




  // getProfile(){
  //   let user = firebase.auth().currentUser;
  //   firebase.database().ref('/users/' + user.uid).once('value')
  //   .then((snapshot)=> {
  //       let tmp = snapshot.val();
  //       let transform = Object.keys(tmp).map(key => tmp[key]);
  //       let userName = transform[0].userName
  //       let userRole = transform[0].userRole 
  //       let city = transform[0].city
  //       let about = transform[0].about
  //       this.profile = new Profile(userName, userRole, city, about); 
  //     });
  //     console.log(this.profile)
  // };
}
