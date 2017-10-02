import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'lm-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.styl']
})
export class SearchResultsComponent {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchSVC: SearchService) {
    this.searchSVC.realTimeSearch(this.searchTerm$)
    .subscribe(results => {
      this.results = results.results;
    });
   }
}


