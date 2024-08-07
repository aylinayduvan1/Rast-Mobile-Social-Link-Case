import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Link } from 'src/app/models/model';
import { LinksService } from '../../services/link/links.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() list$!: Observable<Link[]>;
  @Input() totalRecords: number = 0;
  @Output() deleteLink = new EventEmitter<number>();
  @Output() openModal = new EventEmitter<Link>();

  
  @Input() searchText: string = '';

  //ublic totalRecords: number = 0;

  ngOnInit() {
    this.list$.subscribe(links => {
      this.totalRecords = links.length;
    });
  }

 
  public isAcitve: boolean = false;
  private linkIdToDelete: number | null = null;

  public onDeleteLink(id: number) {
    this.deleteLink.emit(id);
  }

  onOpenModal(link: Link) {
    this.openModal.emit(link);
  }

 public onPageChange(event: any) {
    console.log('Page changed:', event);
  }

  public closeDeleteModal(){
    this.isAcitve = false;
  }

  public openDeleteModal(id: number): void {
    this.linkIdToDelete = id;
    this.isAcitve = true;
  }

  public confirmDelete() {
    if (this.linkIdToDelete) {
      this.deleteLink.emit(this.linkIdToDelete);
      this.isAcitve = false;
      this.linkIdToDelete = null;    
    }
  }
}
