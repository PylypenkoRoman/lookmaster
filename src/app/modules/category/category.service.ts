import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Category } from "app/modules/category/category";

@Injectable()
export class CategoryService {
categoryList: Category[]


constructor() {
  this.getCategories();
}

  createCategory(category: Category){
    let storageRef = firebase.storage().ref();
    storageRef.child(`images/${category.imgTitle}`).putString(category.img, 'base64')
      .then((snapshot) =>{
        let url = snapshot.metadata.downloadURLs[0];
        let dbRef = firebase.database().ref('category/');
        let newCategory = dbRef.push();
        newCategory.set({
          title: category.title,
          imgTitle: category.imgTitle,
          img: url,
          id: newCategory.key
        });
      });
    };

  getCategories(){
    let dbRef = firebase.database().ref('category/');
    return dbRef.once('value')
      .then((snapshot)=> {
          let tmp: string[] = snapshot.val(); 
          this.categoryList = Object.keys(tmp).map(key => tmp[key])
          return this.categoryList
      })
      .catch(function(error){
        console.log(`${error.message} Unable to load categories Try Again! `)
      });
  }
  // editCategory(update: Category){
  //   let dbRef = firebase.database().ref('category/').child(update.id)
  //       .update({
  //         title: update.title,
  //       });
  //     alert('post edited');  
  // };

  // removeCategory(deletePost: Category){
  //   let dbRef = firebase.database().ref("category/").child(deletePost.id).remove();
  //   alert('post deleted');
  //   let imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
  //       .delete()
  //         .then(function() {
  //           alert(`${deletePost.imgTitle} was deleted from storage`);
  //         }).catch(function(error) {
  //           alert('Error - Unuble to delete ${deletePost.imgTitle}')
  //         })
  // };
};
