import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsComponent } from './collections.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CollectionsRoutingModule
  ],
  declarations: [
    CollectionsComponent
  ]
})
export class CollectionsModule { }
