import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lm-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.styl']
})
export class UiKitComponent implements OnInit {
  dataModel = [{name: "Bob"}, {name: "Martin"}, {name: "Leo"}];
  constructor() { }

  ngOnInit() {
  }

}
