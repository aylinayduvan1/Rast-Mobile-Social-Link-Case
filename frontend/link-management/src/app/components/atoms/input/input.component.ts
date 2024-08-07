import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() type: string = 'text'; // Varsayılan değer atandı
  @Input() name: string = ''; // Varsayılan değer atandı
  @Input() value: string = ''; // Varsayılan değer atandı
  @Input() style?: string;

}
