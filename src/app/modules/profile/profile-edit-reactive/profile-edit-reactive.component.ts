import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import * as firebase from 'firebase';
import { ProfileService } from "app/modules/profile/profile.service";
import { Profile } from "../profile";
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { emailValidator } from "app/shared/validators/email.validator";

@Component({
  selector: 'lm-profile-edit-reactive',
  templateUrl: './profile-edit-reactive.component.html',
  styleUrls: ['./profile-edit-reactive.component.styl']
})
export class ProfileEditReactiveComponent implements OnInit {
  profile;
  profileEditForm;
  cities = [ "Львів", "Харків", "Одеса", "Київ", "Кривий Ріг" ]

    constructor(private profileSVC: ProfileService, private formBuilder: FormBuilder) {

    }
  
    ngOnInit() {
      this.profile = this.profileSVC.profile
      this.profileEditForm = new FormGroup({
        userName: new FormControl( this.profile.userName, [
                   Validators.required ]),
        city: new FormControl( this.profile.city),
        about: new FormControl( this.profile.about ),
        email: new FormControl( this.profile.email, 
                [ emailValidator ]),
        phone: new FormControl ( this.profile.phone ),
        payType: new FormControl ( this.profile.payType ),
        salonAddress: new FormControl ( this.profile.salonAddress ),
        homeAddress: new FormControl ( this.profile.homeAddress ),
        workAddress: new FormControl ( this.profile. workAddress ),
        workAtClientHome: new FormControl ( this.profile.workAtClientHome )
      });
        
    }

    get userName() { return this.profileEditForm.get('userName'); }
    get email() { return this.profileEditForm.get('email'); }
  
    editProfile(){
      console.log(this.profile)
      this.profileSVC.editProfile(this.profile)
    }
  
  }