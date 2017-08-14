import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from "app/modules/category/category/category.component";


const categoryRoutes : Routes = [

  { path: 'category', component: CategoryComponent}
];
@NgModule({
  imports: [RouterModule.forChild(categoryRoutes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
