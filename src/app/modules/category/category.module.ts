import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "app/shared/shared.module";
import { FormsModule }   from '@angular/forms';
import { CategoryComponent } from "app/modules/category/category/category.component";
import { CategoryService } from "app/modules/category/category.service";
import { CategoryRoutingModule } from "app/modules/category/category-routing.module";
import { CategoryAddComponent } from './category-add/category-add.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CategoryRoutingModule
  ],
  declarations: [
    CategoryComponent,
    CategoryAddComponent
  ],
  providers: [
    CategoryService
  ]
})
export class CategoryModule { }
