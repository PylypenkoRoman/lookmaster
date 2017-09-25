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
import { AuthGuard } from "app/shared/guards/auth.guard";
import { ProfileResolver } from "app/modules/profile/profile-resolver.service";
import { ProfileEditReactiveComponent } from "app/modules/profile/profile-edit-reactive/profile-edit-reactive.component";
import { AuthResolver } from "app/shared/services/auth-resolver.service";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileNavComponent,
    canActivate: [ AuthGuard ],
    resolve: {
      AuthResolver
    }
  },
  {
    path: 'view',
    component: ProfileViewComponent,
    canActivate: [ AuthGuard ],
    resolve: {
      AuthResolver
    }
  },
  {
    path: 'edit',
    component: ProfileEditComponent,
    resolve: {
      profile: ProfileResolver,
      AuthResolver
    },
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-reactive',
    component: ProfileEditReactiveComponent,
    canActivate: [AuthGuard],
    resolve: {
      team: ProfileResolver
    }
  },
  {
    path: 'info',
    component: ProfileInfoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'info-nav',
    component: ProfileInfoNavComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications',
    component: ProfileNotificationsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'security',
    component: ProfileSecurityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts',
    component: ProfileContactsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'schedule',
    component: ProfileScheduleComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'notifications-settings',
    component: ProfileNotificationsSettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'extensions',
    component: ProfileExtensionsComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
