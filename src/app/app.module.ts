import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AuthModule } from "app/modules/auth/auth.module";
import { MainModule } from "app/modules/main/main.module";
import { ProfileModule } from "app/modules/profile/profile.module";
import { CollectionsModule } from "app/modules/collections/collections.module";
import { SearchModule } from "app/modules/search/search.module";
import { AppRoutingModule } from "app/app-routing.module";
import { PortfolioModule } from "app/modules/portfolio/portfolio.module";
import { CategoryModule } from "app/modules/category/category.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
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

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }