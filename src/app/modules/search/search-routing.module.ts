import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from "app/modules/search/search-results/search-results.component";

const routes: Routes = [
  { path: 'search', component: SearchComponent, pathMatch: 'full'},
  { path: 'search-result', component: SearchResultsComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
