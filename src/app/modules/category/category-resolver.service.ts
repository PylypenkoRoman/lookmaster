import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Category } from './Category';
import { CategoryService } from './category.service';
import { Observable } from "rxjs/Rx";

@Injectable()
export class CategoryResolver implements Resolve<Category>  {

  constructor(private categorySVC: CategoryService) { }

  resolve(): Promise<any>{
    let profile: Category[]
    return Promise.resolve(this.categorySVC.getCategories())
    .then((category) => {
        console.log(category)
      let categoryList = category
      return categoryList
    })
  }
}