import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Category } from "app/modules/category/category";
import { Router } from "@angular/router";

@Component({
  selector: 'lm-portfolio-category',
  templateUrl: './portfolio-category.component.html',
  styleUrls: ['./portfolio-category.component.styl']
})
export class PortfolioCategoryComponent implements OnInit {
  categoryList: Category[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.getCategories()
    console.log(this.categoryList)
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
  chooseCategory(category: Category){
    let id = category.id;
    localStorage.setItem('uploadFilesCategoryId', id);
    this.router.navigate(['portfolio/download'])
    }
  }


  // getSingle(id: string){
  //   let dbRef = firebase.database().ref('blogPosts');
  //   dbRef.orderByChild('id')
  //     .equalTo(id)
  //     .once('value')
  //     .then((snapshot)=>{
  //       let tmp = snapshot.val();
  //       let transform = Object.keys(tmp).map(key => tmp[key]);
  //       let title = transform[0].title
  //       let content = transform[0].content
  //       let imgTitle = transform[0].imgTitle
  //       let img = transform[0].img
  //       this.singlePost = new Blog(title, content, imgTitle, img); 
  //     });
  // };
