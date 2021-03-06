import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from "./blog";

@Injectable()
export class BlogService {

  createPost(post: Blog){
    let storageRef = firebase.storage().ref();
    storageRef.child(`images/${post.imgTitle}`).putString(post.img, 'base64')
      .then((snapshot) =>{
        let url = snapshot.metadata.downloadURLs[0];
        let dbRef = firebase.database().ref('blogPosts/');
        let newPost = dbRef.push();
        newPost.set({
          title: post.title,
          content: post.content,
          imgTitle: post.imgTitle,
          img: url,
          id: newPost.key
        });
      });
  };

  editPost(update: Blog){
    let dbRef = firebase.database().ref('blogPosts/').child(update.id)
        .update({
          title: update.title,
          content: update.content
        });
      alert('post edited');  
  }

  removePost(deletePost: Blog){
    let dbRef = firebase.database().ref("blogPosts/").child(deletePost.id).remove();
    alert('post deleted');
    let imageRef = firebase.storage().ref().child(`images/${deletePost.imgTitle}`)
        .delete()
          .then(function() {
            alert(`${deletePost.imgTitle} was deleted from storage`);
          }).catch(function(error) {
            alert('Error - Unuble to delete ${deletePost.imgTitle}')
          })
  }
};
