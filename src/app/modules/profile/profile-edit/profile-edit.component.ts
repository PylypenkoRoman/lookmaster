import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { ProfileService } from "app/modules/profile/profile.service";
import { Profile } from "../profile";

@Component({
  selector: 'lm-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.styl']
})

export class ProfileEditComponent implements OnInit {
profile;
emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
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
