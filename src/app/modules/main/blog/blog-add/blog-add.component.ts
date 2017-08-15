import { Component} from '@angular/core';
import { Router } from "@angular/router";  
import { BlogService } from "../blog.service";
import { Blog } from "../blog";


@Component({
  selector: 'lm-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.styl']
})
export class BlogAddComponent{
  imgTitle: string;
  imageSRC: string;
  postTitle: string;
  content: string;
  post: Blog;

  constructor( private blogSVC: BlogService, private router: Router  ) { }


  fileLoad($event: any){
    let myReader:FileReader = new FileReader();
    let file:File = $event.target.files[0];
    this.imgTitle = file.name;
    myReader.readAsDataURL(file);

    myReader.onload = (e: any) => {
      this.imageSRC = e.target.result
    }
  }

  createPost(){
    this.post = new Blog (
      this.postTitle,
      this.content,
      this.imgTitle,
      this.imageSRC.substring(23)
    );
    this.blogSVC.createPost(this.post);
    
    alert(`${this.postTitle} added to post`)
    this.router.navigate(['/blog']);
  }

  cancel(){
    this.router.navigate(['/blog']);
  }
 
}
