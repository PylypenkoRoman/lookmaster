import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Category } from "app/modules/category/category";

@Injectable()
export class CategoryService {

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
