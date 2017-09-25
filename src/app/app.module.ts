import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

import { AuthModule } from "app/modules/auth/auth.module";
import { MainModule } from "app/modules/main/main.module";
import { ProfileModule } from "app/modules/profile/profile.module";
import { CollectionsModule } from "app/modules/collections/collections.module";
import { SearchModule } from "app/modules/search/search.module";
import { AppRoutingModule } from "app/app-routing.module";
import { PortfolioModule } from "app/modules/portfolio/portfolio.module";
import { CategoryModule } from "app/modules/category/category.module";
import { UserService } from "app/shared/services/user.service";
import { AuthGuard } from "app/shared/guards/auth.guard";
import { AuthResolver } from "app/shared/services/auth-resolver.service";
import { ProfileService } from "app/modules/profile/profile.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule,
    MainModule,
    ProfileModule,
    PortfolioModule,
    CollectionsModule,
    SearchModule,
    CategoryModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthGuard,
    AuthResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }