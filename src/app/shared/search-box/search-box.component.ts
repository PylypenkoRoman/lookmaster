import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lm-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.styl']
})
export class SearchBoxComponent implements OnInit {
  view: string;
  constructor() { }

  ngOnInit() {
  }

}
