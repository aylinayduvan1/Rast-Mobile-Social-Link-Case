import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  private storageKey = 'searchHistory';
  private searchHistorySubject = new BehaviorSubject<string[]>(this.getSearchHistory());

  constructor() { }

  addSearchTerm(term: string): void {
    const history = this.getSearchHistory();
    
    if (!history.includes(term)) {
      history.push(term);
      localStorage.setItem(this.storageKey, JSON.stringify(history));
      this.searchHistorySubject.next(history);  // Güncellemeyi yayında
    }
  }

  getSearchHistory() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  clearHistory(): void {
    localStorage.removeItem(this.storageKey);
    this.searchHistorySubject.next([]);  // Boş listeyi yayında
  }

  getSearchHistoryObservable() {
    return this.searchHistorySubject.asObservable();  // Observable döner
  }
}
