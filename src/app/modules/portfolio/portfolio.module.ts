import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioCategoryComponent } from './portfolio-category/portfolio-category.component';
import { PortfolioDownloadComponent } from './portfolio-download/portfolio-download.component';
import { PortfolioEditWorkComponent } from './portfolio-edit-work/portfolio-edit-work.component';
import { PortfolioPhotosComponent } from './portfolio-photos/portfolio-photos.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule
  ],
  declarations: [PortfolioCategoryComponent, PortfolioDownloadComponent, PortfolioEditWorkComponent, PortfolioPhotosComponent, PortfolioComponent]
})
export class PortfolioModule { }
