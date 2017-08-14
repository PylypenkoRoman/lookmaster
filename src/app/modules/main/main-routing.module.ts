import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from "app/modules/main/blog/blog.component";
import { UserService } from "app/shared/services/user.service";
import { BlogAdminComponent } from "app/modules/main/blog/blog-admin/blog-admin.component";
import { BlogPostComponent } from "app/modules/main/blog/blog-post/blog-post.component";

const routes: Routes = [
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog-admin',
    component: BlogAdminComponent
  },
    {
    path: 'post/:id',
    component: BlogPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
