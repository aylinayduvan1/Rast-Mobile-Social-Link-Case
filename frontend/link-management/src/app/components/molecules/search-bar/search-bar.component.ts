import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Link } from 'src/app/models/model';
import { LinksService } from '../../services/link/links.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Input() style?: string;
  @Input() inputStyle?: string;
  @Output() openModal = new EventEmitter<void>();
  public searchText : string = ''
  @Output() searchTextChanged = new EventEmitter<string>();


  onOpenModal(): void {
    this.openModal.emit();
  }

  onSearch(): void {
    this.searchTextChanged.emit(this.searchText);
  }

  onClear(): void {
    this.searchText = '';
    this.searchTextChanged.emit(this.searchText);
  }
}
