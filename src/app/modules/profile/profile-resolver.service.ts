import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { Observable } from "rxjs/Rx";

@Injectable()
export class ProfileResolver implements Resolve<Profile> {

  constructor(private profileSVC: ProfileService) { }

  resolve(): Promise<any>{
    let profile: Profile[]
    return new Promise<any>(resolve => setTimeout(resolve, 1000))
    .then(() => {
      profile = this.profileSVC.profile;
      return profile
    })
  }


  // resolve(): Promise<any>{
  //   let profile: Profile[]
  //   return Promise.resolve(this.profileSVC.getProfile())
  //   .then((profileInfo) => {
  //       console.log(profileInfo)
  //     let profile = profileInfo
  //     return profile
  //   })
  // }

  // resolve(): Observable<any>{
  //   let profile: Profile[]
  //   return this.profileSVC.getProfile();
  //   }
  // }

  // resolve(): Promise<any>{
  //   let profile: Profile[]
  //   return Promise.resolve(this.profileSVC.getProfile())
  //     .then((profile) => {
  //       console.log(profile)
  //       return profile
  //     });
  // }

}
