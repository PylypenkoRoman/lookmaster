import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { CategoryService } from "app/modules/category/category.service";
import { SearchResult } from "app/modules/search/search/search-result.interface";
import { Category } from "app/modules/category/category";

@Injectable()
export class SearchService {
  categoryList = [];
  
  constructor(private categorySVC: CategoryService) {
    this.categoryList = this.categorySVC.categoryList;
    }

  list(search: string = null, page: number = 1, limit: number = 4): Observable<SearchResult<Category>> {
    let categoryResult = this.categoryList.filter(function(category: Category){
      return search ? category.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let categoryResultPage = categoryResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: categoryResult.length, items:categoryResultPage}).delay(100);
  }
}
