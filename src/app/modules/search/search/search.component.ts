import { Component, OnInit, AfterViewInit, ChangeDetectorRef} from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Injectable } from '@angular/core'

import { URLSearchParams } from '@angular/http'
import { Http } from '@angular/http'
import { SearchService } from "app/modules/search/search.service";
import { SearchResult } from "app/modules/search/search/search-result.interface";
import { CategoryService } from "app/modules/category/category.service";
import { Category } from "app/modules/category/category";



@Component({
  selector: 'lm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl'],
})


export class SearchComponent implements OnInit{
 
  total$: Observable<any>;
  items$: Observable<any>;


  terms: string = "";
  private searchTermStream = new Subject<string>();

  page: number = 1;
  private pageStream = new Subject<number>();

  searchSource
  pageSource

  constructor(protected searchSVC: SearchService){}

  ngOnInit(){
    this.searchSource = this.getSearchSource(this.searchTermStream)
    this.pageSource = this.startSearchSource(this.pageStream)

    const source = this.pageSource
      .merge(this.searchSource)
      .startWith({search: this.terms, page: this.page})
      .switchMap((params: {search: string, page: number}) => {
        return this.searchSVC.list(params.search, params.page)
      })
      .share();

    this.total$ = source.pluck('total');
    this.items$ = source.pluck('items')
  }

  getSearchSource(searchTermStream){
    return searchTermStream
    .debounceTime(1000)
    .distinctUntilChanged()
    .map(searchTerm =>{
      this.terms = searchTerm;
      return {search: searchTerm, page: 1}
    });
  } 

  startSearchSource(pageStream){
    return pageStream.map(pageNumber => {
      this.page = pageNumber;
      return {search: this.terms, page: pageNumber}
    });
  }
  
  search(terms: string){
    this.searchTermStream.next(terms);
  }

  goToPage(page: number){
    this.pageStream.next(page)
  }
}