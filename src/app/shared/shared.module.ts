import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MasterCardComponent } from './master-card/master-card.component';
import { WorkCardComponent } from './work-card/work-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileSubNavComponent } from './mobile-sub-nav/mobile-sub-nav.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { SharedRoutingModule } from "app/shared/shared-routing.module";
import { TruncatePipe } from "app/shared/pipes/trunk.pipe";
import { WorkCardEditComponent } from "app/shared/work-card-edit/work-card-edit.component";



@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SearchBoxComponent, 
    MasterCardComponent, 
    WorkCardComponent,
    WorkCardEditComponent, 
    NavbarComponent, 
    MobileSubNavComponent, 
    SvgIconComponent,
    TruncatePipe
  ],
  exports: [
    HeaderComponent, 
    FooterComponent, 
    SearchBoxComponent, 
    MasterCardComponent, 
    WorkCardComponent, 
    NavbarComponent, 
    MobileSubNavComponent, 
    SvgIconComponent,
    TruncatePipe
    ],
  providers: [
    TruncatePipe
  ]
})
export class SharedModule { }
