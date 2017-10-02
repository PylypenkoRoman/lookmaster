import { Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import { Category } from "app/modules/category/category";
import { CategoryService } from "app/modules/category/category.service";
import { Router } from "@angular/router";

@Component({
  selector: 'lm-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.styl']
})
export class CategoryAddComponent {
  @Output() onChanged = new EventEmitter<boolean>();
  categoryTitle: string;
  imgTitle: string;
  imageSRC: string;
  category: Category;

  constructor( private categorySVC: CategoryService, private router: Router  ) { }

  fileLoad($event: any){
    let myReader:FileReader = new FileReader();
    let file:File = $event.target.files[0];
    this.imgTitle = file.name;
    myReader.readAsDataURL(file);

    myReader.onload = (e: any) => {
      this.imageSRC = e.target.result
    }
  }

  createCategory(){
    this.category = new Category (
      this.categoryTitle,
      this.imgTitle,
      this.imageSRC.substring(23)
    );
    console.log(this.category)
    this.categorySVC.createCategory(this.category)
    this.categoryTitle = "";
    this.imgTitle = "";
    this.imageSRC = "";
  }

  cancel(){
    this.router.navigate(['/category']);
  }
  
}
