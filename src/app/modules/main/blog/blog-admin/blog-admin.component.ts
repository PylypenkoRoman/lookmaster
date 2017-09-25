import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { BlogService } from "../blog.service";
import { Blog } from "../blog";


@Component({
  selector: 'lm-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.styl']
})
export class BlogAdminComponent implements OnInit {
  userLoggedIn: boolean;
  tabChoise: string;
  blogPost: Blog[];
  formDisplay: boolean = true;
  singlePost: Blog;
 
  constructor(
    private userSVC: UserService,
    private router: Router,
    private blogSVC: BlogService

  ) {}

  ngOnInit() {
    this.getPosts();
  }

  chooseTab(tab: string){
    this.tabChoise = tab;
  }

  logout(){
    this.userSVC.logout();
    this.userLoggedIn = this.userSVC.userLoggedIn
    this.router.navigate(['/home']);  
  }

  getPosts(){
    let dbRef = firebase.database().ref('blogPosts/');
    dbRef.once('value')
      .then((snapshot)=> {
          let tmp: string[] = snapshot.val(); 
          this.blogPost = Object.keys(tmp).map(key => tmp[key])
      }); 
  }

  editPost(thePost: Blog){
    this.singlePost = thePost;
    this.formDisplay = false;
  }

  cencelEdit(){
    this.formDisplay = true;
  }

  updatePost(single: Blog){
    this.blogSVC.editPost(single);
    this.formDisplay = true;
  }

  deletePost(single: Blog){
    let verify = confirm('Are you sure you want to delete this post?')
    if(verify = true){
      this.blogSVC.removePost(single);
      this.router.navigate(['/blog-admin']);
    } else {
      alert('Nothing deleted!')
    }
  }

}
