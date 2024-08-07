import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { BehaviorSubject, first, firstValueFrom, Observable, of } from 'rxjs';
import { Link } from 'src/app/models/model';
import { LinksService } from '../../services/link/links.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent {
  @ViewChild('ngForm') ngForm!: NgForm;

  public list$: Observable<Link[]>;
  public isModalVisible: boolean = false;
  public isEditing: boolean = false;
  public selectedLink$ = new BehaviorSubject<Link | null>(null);


  openModal(link?: Link) {
    debugger
    if (link) {
      this.isEditing = true;
      this.selectedLink$.next(link);
    } else {
      this.isEditing = false;
      this.selectedLink$.next(null);
    }
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
    this.selectedLink$.next(null);
    if (this.ngForm) {
      this.ngForm.reset();
    }
  }

  public async submitForm(form: NgForm) {
    if (form.valid) {
      const link = form.value;
      
      try {
        if (this.isEditing) {
          const selectedLink = this.selectedLink$.value;
          if (selectedLink) {
            link.id = selectedLink.id; // id'yi link'e ekle
            await this.service.updateLink(link);
          }
        } else {
          (await this.service.addLink(link)).toPromise();
        }
        
        this.refreshList();
        this.closeModal();
      } catch (error) {
        console.error('Error processing link:', error);
      }
    } else {
      console.log('Form geçersiz!');
    }
  }
  
  public async deleteLink(id: number) {
      await this.service.deleteLink(id);
      this.refreshList();
  }
  
  
  private async  refreshList() {
    const links = await firstValueFrom(this.service.list$);
    this.list$ = of(links);
  }


  public searchText: string = '';

  constructor(private service: LinksService) {
    this.list$ = this.service.list$;
    this.refreshList();
  }

  onSearch(searchText: string): void {
    this.searchText = searchText;
  }

}

