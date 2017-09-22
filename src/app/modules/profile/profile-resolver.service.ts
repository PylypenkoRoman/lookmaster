import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Profile } from './profile';
import { ProfileService } from './profile.service';

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

}
