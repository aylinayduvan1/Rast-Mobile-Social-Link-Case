import { Component, OnInit } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history/search-history.service';

@Component({
  selector: 'app-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: ['./table-header.component.scss']
})
export class TableHeaderComponent implements OnInit {

  public searchHistory: string[] = [];
  public historyButton: boolean = false;

  constructor(private searchHistoryService: SearchHistoryService) {}

  ngOnInit() {
    this.searchHistoryService.getSearchHistoryObservable()
      .subscribe(history => {
        this.searchHistory = history;
      });
  }

  public clearHistory() {
    this.searchHistoryService.clearHistory();
  }
  
  public historyHole(){
    this.historyButton = !this.historyButton
  }
  
}
