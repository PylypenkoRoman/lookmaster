import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioCategoryComponent } from './portfolio-category/portfolio-category.component';
import { PortfolioDownloadComponent } from './portfolio-download/portfolio-download.component';
import { PortfolioPhotosComponent } from './portfolio-photos/portfolio-photos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from "app/shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioCategoryComponent, PortfolioDownloadComponent, PortfolioPhotosComponent, PortfolioComponent]
})
export class PortfolioModule { }
