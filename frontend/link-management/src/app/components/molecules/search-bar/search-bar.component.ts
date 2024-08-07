// src/app/components/search-bar/search-bar.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SearchHistoryService } from '../../services/search-history/search-history.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() style?: string;
  @Input() inputStyle?: string;
  @Output() openModal = new EventEmitter<void>();
  @Output() searchTextChanged = new EventEmitter<{ text: string, criteria: string }>();

  public searchText: string = '';
  public selectedCriteria: string = 'all'; 
  public searchOptions: { label: string, value: string }[] = [
    { label: 'Tümü', value: 'all' },
    { label: 'Link', value: 'url' },
    { label: 'İsim', value: 'name' },
  ];

  constructor(private searchHistoryService: SearchHistoryService) {}

 public onSearch(): void {
    if (this.searchText.trim()) { 
      this.searchHistoryService.addSearchTerm(this.searchText.trim());
    }
    this.searchTextChanged.emit({ text: this.searchText, criteria: this.selectedCriteria });
  }

  public onClear(): void {
    this.searchText = '';
    this.searchTextChanged.emit({ text: this.searchText, criteria: this.selectedCriteria });
  }

 public onOpenModal(): void {
    this.openModal.emit();
  }

  public onCriteriaChange(criteria: string): void {
    this.selectedCriteria = criteria;
    this.searchTextChanged.emit({ text: this.searchText, criteria: this.selectedCriteria });
  }
}
