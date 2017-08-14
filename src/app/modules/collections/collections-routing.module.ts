import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CollectionsComponent } from "app/modules/collections/collections.component";

const collectionRoutes : Routes = [

  { path: 'collections', component: CollectionsComponent, pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forChild(collectionRoutes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
