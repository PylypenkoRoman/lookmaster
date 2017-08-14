import { Router, ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Blog } from "../blog";


@Component({
  selector: 'lm-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.styl']
})
export class BlogPostComponent implements OnInit {
  singlePost: Blog;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let postId = this.route.snapshot.params['id'];
    this.getSingle(postId)
  }

  getSingle(id: string){
    let dbRef = firebase.database().ref('blogPosts');
    dbRef.orderByChild('id')
      .equalTo(id)
      .once('value')
      .then((snapshot)=>{
        let tmp = snapshot.val();
        let transform = Object.keys(tmp).map(key => tmp[key]);
        let title = transform[0].title
        let content = transform[0].content
        let imgTitle = transform[0].imgTitle
        let img = transform[0].img
        this.singlePost = new Blog(title, content, imgTitle, img); 
      });
  };
};
