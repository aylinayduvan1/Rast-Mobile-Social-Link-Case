import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  private storageKey = 'searchHistory'; // LocalStorage'da saklanacak anahtar
  private searchHistorySubject = new BehaviorSubject<string[]>(this.getSearchHistory());  // Arama geçmişinin güncel durumunu takip eden BehaviorSubject

  constructor() { }

  public addSearchTerm(term: string): void {
    const history = this.getSearchHistory();
    
    if (!history.includes(term)) {
      history.push(term);
      localStorage.setItem(this.storageKey, JSON.stringify(history));
      this.searchHistorySubject.next(history);  // Güncellemeyi yayında
    }
  }

  public getSearchHistory() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');  // Eğer geçmiş yoksa boş dizi döndür
  }

  public clearHistory(): void {
    localStorage.removeItem(this.storageKey);
    this.searchHistorySubject.next([]);  // Boş listeyi yayında
  }

  public getSearchHistoryObservable() {
    return this.searchHistorySubject.asObservable();  // Observable döner
  }
}
