import { NgModule } from '@angular/core';

import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from "app/modules/main/home/home.component";
import { UiKitComponent } from "app/modules/main/ui-kit/ui-kit.component";
import { PageNotFoundComponent } from "app/modules/main/page-not-found/page-not-found.component";
import { AuthGuard } from "app/shared/guards/auth.guard";

const appRoutes : Routes = [

  { path: 'main', loadChildren: 'app/modules/main/main.module#MainModule'},
  { path: 'auth', loadChildren: 'app/modules/auth/auth.module#AuthModule'},
  { path: 'collections', loadChildren: 'app/modules/collections/collections.module#CollectionsModule',},
  { path: 'search', loadChildren: 'app/modules/search/search.module#SearchModule'},
  { path: 'profile', loadChildren: 'app/modules/profile/profile.module#ProfileModule',},
  { path: 'category', loadChildren: 'app/modules/category/category.module#CategoryModule',},
  { path: 'home', component: HomeComponent },
  { path: 'ui-kit', component: UiKitComponent},
  { path: 'page-not-found', component: PageNotFoundComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }
