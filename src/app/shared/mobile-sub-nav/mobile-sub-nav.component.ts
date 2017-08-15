import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'lm-mobile-sub-nav',
  templateUrl: './mobile-sub-nav.component.html',
  styleUrls: ['./mobile-sub-nav.component.styl']
})
export class MobileSubNavComponent{;

  constructor(  private router: Router) {
  }

  @Input() navState: boolean;
  @Output() navStateChange = new EventEmitter<boolean>();

  closeMobileSubNav(){
    this.navState = false;
    this.navStateChange.emit(this.navState);
  }
}
