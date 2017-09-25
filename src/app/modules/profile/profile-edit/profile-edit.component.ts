import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { ProfileService } from "app/modules/profile/profile.service";
import { Profile } from "../profile";
// import { emailValidator } from "app/shared/validators/email.validator2";

@Component({
  selector: 'lm-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.styl']
})

export class ProfileEditComponent implements OnInit {
profile;
cities = [ "Львів", "Харків", "Одеса", "Київ", "Кривий Ріг" ]

  constructor(private profileSVC: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileSVC.profile
  }

  editProfile(){
    console.log(this.profile)
    this.profileSVC.editProfile(this.profile)
  }

}
