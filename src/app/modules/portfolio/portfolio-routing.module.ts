import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from "app/modules/portfolio/portfolio/portfolio.component";
import { PortfolioCategoryComponent } from "app/modules/portfolio/portfolio-category/portfolio-category.component";
import { PortfolioDownloadComponent } from "app/modules/portfolio/portfolio-download/portfolio-download.component";
import { PortfolioPhotosComponent } from "app/modules/portfolio/portfolio-photos/portfolio-photos.component";

const routes: Routes = [
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'portfolio/category',
    component: PortfolioCategoryComponent,
  },
  {
    path: 'portfolio/download',
    component: PortfolioDownloadComponent,
  },
  {
    path: 'portfolio/photos',
    component: PortfolioPhotosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
