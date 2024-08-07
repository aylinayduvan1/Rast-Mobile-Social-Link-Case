import { Pipe, PipeTransform } from '@angular/core';
import { Link } from 'src/app/models/model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(links: Link[] | null, searchText: string): Link[] {
    if (!links) {
      return [];
    }
    if (!searchText) {
      return links; 
    }
    searchText = searchText.toLowerCase();
    return links.filter(link =>
      link.url.toLowerCase().includes(searchText) ||
      link.name.toLowerCase().includes(searchText) ||
      link.description.toLowerCase().includes(searchText)
    );
  }
}
