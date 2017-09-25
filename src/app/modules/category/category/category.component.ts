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
    this.getCategories();
  }

  getCategories(){
    let dbRef = firebase.database().ref('category/');
    return dbRef.once('value')
      .then((snapshot)=> {
          let tmp: string[] = snapshot.val(); 
          this.categoryList = Object.keys(tmp).map(key => tmp[key])
      })
      .catch(function(error){
        console.log(`${error.message} Unable to load categories Try Again! `)
      });
  }

  onChanged(){
    this.getCategories();
    this.chooseTab('')
  }

  chooseTab(tab: string){
    this.tabChoise = tab;
  }

}
