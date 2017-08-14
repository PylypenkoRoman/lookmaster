import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileNavComponent,
  },
  {
    path: 'view',
    component: ProfileViewComponent,
  },
  {
    path: 'edit',
    component: ProfileEditComponent,
  },
  {
    path: 'info',
    component: ProfileInfoComponent,
  },
  {
    path: 'info-nav',
    component: ProfileInfoNavComponent,
  },
  {
    path: 'notifications',
    component: ProfileNotificationsComponent,
  },
  {
    path: 'security',
    component: ProfileSecurityComponent,
  },
  {
    path: 'contacts',
    component: ProfileContactsComponent,
  },
  {
    path: 'schedule',
    component: ProfileScheduleComponent,
  },
  {
    path: 'notifications-settings',
    component: ProfileNotificationsSettingsComponent,
  },
  {
    path: 'extensions',
    component: ProfileExtensionsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
