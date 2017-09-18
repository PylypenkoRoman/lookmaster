import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileContactsComponent } from './profile-contacts/profile-contacts.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileExtensionsComponent } from './profile-extensions/profile-extensions.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileInfoNavComponent } from './profile-info-nav/profile-info-nav.component';
import { ProfileNotificationsComponent } from './profile-notifications/profile-notifications.component';
import { ProfileNotificationsSettingsComponent } from './profile-notifications-settings/profile-notifications-settings.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileSecurityComponent } from './profile-security/profile-security.component';
import { ProfileScheduleComponent } from './profile-schedule/profile-schedule.component';
import { SharedModule } from "app/shared/shared.module";
import { ProfileService } from "app/modules/profile/profile.service";
import { UserService } from "app/shared/services/user.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ProfileRoutingModule
  ],
  declarations: [ProfileNavComponent, ProfileContactsComponent, 
    ProfileEditComponent, ProfileExtensionsComponent, 
    ProfileInfoComponent, ProfileInfoNavComponent, 
    ProfileNotificationsComponent, ProfileNotificationsSettingsComponent, 
    ProfileViewComponent, ProfileSecurityComponent, ProfileScheduleComponent],
  providers: [
    ProfileService,
    UserService
  ]  
})
export class ProfileModule { }
