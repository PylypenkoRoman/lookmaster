import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { SharedModule } from "../../shared/shared.module";
import { BlogComponent } from './blog/blog.component';
import { MainRoutingModule } from "app/modules/main/main-routing.module";
import { BlogService } from "app/modules/main/blog/blog.service";
import { BlogAddComponent } from './blog/blog-add/blog-add.component';
import { BlogAdminComponent } from './blog/blog-admin/blog-admin.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogChildComponent } from './blog/blog-child/blog-child.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MainRoutingModule
  ],
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    UiKitComponent,
    BlogComponent,
    BlogAddComponent,
    BlogAdminComponent,
    BlogPostComponent,
    BlogChildComponent
  ],
    providers: [
    BlogService
  ]
})
export class MainModule { }
