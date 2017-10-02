import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { CategoryService } from "app/modules/category/category.service";
import { SearchResult } from "app/modules/search/search/search-result.interface";
import { Category } from "app/modules/category/category";

@Injectable()
export class SearchService {
  categoryList = [];
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';
  
  constructor(private categorySVC: CategoryService, private http: Http) {
    this.categoryList = this.categorySVC.categoryList;
    }

  list(search: string = null, page: number = 1, limit: number = 4): Observable<SearchResult<Category>> {
    let categoryResult = this.categoryList.filter(function(category: Category){
      return search ? category.title.toLowerCase().indexOf(search) !== -1 : true;
    });

    let categoryResultPage = categoryResult.slice((page - 1) * limit, page * limit);
    return Observable.of({total: categoryResult.length, items:categoryResultPage}).delay(100);
  }


  realTimeSearch(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
  }

}
