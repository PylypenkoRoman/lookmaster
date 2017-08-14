import { Component, OnInit } from '@angular/core';
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import * as firebase from 'firebase';
import { Blog } from "./blog";


@Component({
  selector: 'lm-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.styl']
})
export class BlogComponent implements OnInit {
  blogPost: Blog[];
 
  constructor(private userSVC: UserService, private router: Router) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts(){
    let dbRef = firebase.database().ref('blogPosts/');
    dbRef.once('value')
      .then((snapshot)=> {
          let tmp: string[] = snapshot.val(); 
          this.blogPost = Object.keys(tmp).map(key => tmp[key])
      }); 
  }

  choosePost(post: Blog) {
    this.router.navigate(['/post', post.id])
  }
}
