import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Category } from "app/modules/category/category";
import { CategoryService } from "app/modules/category/category.service";
import { Router } from "@angular/router/";

@Component({
  selector: 'lm-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.styl']
})
export class CategoryComponent implements OnInit {
user: string;
tabChoise: string;
categoryList: Category[]

  constructor( private categorySVC: CategoryService, private router: Router  ) { }

  ngOnInit() {
    this.categorySVC.getCategories();
  }

  chooseTab(tab: string){
    this.tabChoise = tab;
  }

}
