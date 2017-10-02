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
    return Promise.resolve(this.profileSVC.getProfile())
    .then((profileInfo) => {
        console.log(profileInfo)
      let profile = profileInfo
      return profile
    })
  }
}
