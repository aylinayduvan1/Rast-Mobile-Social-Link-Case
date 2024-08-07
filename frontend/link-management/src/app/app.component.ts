import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject, first, Observable, of } from 'rxjs';
import { Link } from './models/model';
import { LinksService } from './components/services/link/links.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('ngForm') ngForm!: NgForm; // Formu alabilmek için ViewChild kullan
  // public list$: Observable<Link[]> = this.service.list$;
  // public selectedLink$ = new BehaviorSubject<Link | null>(null); // Güncellenebilir link için
  // isModalVisible: boolean = false;
  // isEditing: boolean = false; // Modal düzenleme modunda mı kontrolü
  
  // constructor(private service: LinksService) { }

  // openModal(link?: Link) {
  //   debugger
  //   if (link) {
  //     this.isEditing = true;
  //     this.selectedLink$.next(link); // Güncellenebilir linki ayarla
  //   } else {
  //     this.isEditing = false;
  //     this.selectedLink$.next(null); // Yeni link ekleme moduna geç
  //   }
  //   this.isModalVisible = true;
  // }

  // closeModal() {
  //   this.isModalVisible = false;
  //   this.selectedLink$.next(null); // Modal kapatıldığında seçili linki temizle
  //   if (this.ngForm) {
  //     this.ngForm.reset(); // Formu sıfırla
  //   }
  // }

  // deleteLink(id?: number): void {
  //   if (id === undefined) {
  //     console.error('Link ID is required for deletion');
  //     return;
  //   }
  //   this.service.deleteLink(id).subscribe(
  //     () => {
  //       this.refreshList();
  //     },
  //     error => {
  //       console.error('Silme işlemi sırasında hata oluştu:', error);
  //     }
  //   );
  // }

  // public submitForm(form: NgForm) {
  //   if (form.valid) {
  //     const link = form.value;
  //     if (this.isEditing) {
  //       // Güncellenebilir link'i almak için
  //       const selectedLink = this.selectedLink$.value;
  //       if (selectedLink) {
  //         link.id = selectedLink.id; // id'yi link'e ekle
  //         this.service.updateLink(link).subscribe(
  //           () => {
  //             this.refreshList();
  //             this.closeModal();
  //           },
  //           error => {
  //             console.error('Error updating link:', error);
  //           }
  //         );
  //       }
  //     } else {
  //       this.service.addLink(link).subscribe(
  //         () => {
  //           this.refreshList();
  //           this.closeModal();
  //         },
  //         error => {
  //           console.error('Error adding link:', error);
  //         }
  //       );
  //     }
  //   } else {
  //     console.log('Form geçersiz!');
  //   }
  // }
  

  // private refreshList() {
  //   this.service.list$.pipe(
  //     first() // İlk değer alındığında tamamla
  //   ).subscribe(
  //     links => {
  //       this.list$ = of(links); // Yeni listeyi observable olarak atama
  //     },
  //     error => {
  //       console.error('Error fetching updated links:', error);
  //     }
  //   );
  // }
}
