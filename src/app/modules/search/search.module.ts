import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SharedModule } from "app/shared/shared.module";
import { SearchService } from "app/modules/search/search.service";
import { CategoryService } from "app/modules/category/category.service";
import { CategoryResolver } from "app/modules/category/category-resolver.service";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  declarations: [
    SearchComponent,
    SearchResultsComponent,
  ],
  providers: [
    SearchService,
    CategoryService,
    CategoryResolver
  ],
})
export class SearchModule { }
