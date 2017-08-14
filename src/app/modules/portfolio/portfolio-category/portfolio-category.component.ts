import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Category } from "app/modules/category/category";

@Component({
  selector: 'lm-portfolio-category',
  templateUrl: './portfolio-category.component.html',
  styleUrls: ['./portfolio-category.component.styl']
})
export class PortfolioCategoryComponent implements OnInit {
  categoryList: Category[];
  constructor() { }

  ngOnInit() {
    this.getCategories()
  }
  getCategories(){
    let dbRef = firebase.database().ref('category/');
    return dbRef.once('value')
      .then((snapshot)=> {
          let tmp: string[] = snapshot.val(); 
          console.log(tmp)
          this.categoryList = Object.keys(tmp).map(key => tmp[key])
      })
      .catch(function(error){
        console.log(`${error.message} Unable to load categories Try Again! `)
      });
  }
  chooseCategory(category: Category[]){
    console.log(category)
    for (var key in category) {
      console.log( "Ключ: " + key + " значение: " + category[key] );
    }
    
  }
}
