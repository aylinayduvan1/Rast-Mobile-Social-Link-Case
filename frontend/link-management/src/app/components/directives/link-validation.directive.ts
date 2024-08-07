import { Directive, Input, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appLinkValidation]'
})
export class LinkValidationDirective implements OnChanges {
  private validUrlPattern: RegExp = /^(ftp|http|https):\/\/[^ "]+$/; // Varsayılan desen https:// içermesini zorunlu kılmaktadır.

  @Input('appLinkValidation') pattern?: string;

  constructor(private control: NgControl) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pattern']) {
      this.updatePattern();
    }
  }

  private updatePattern() {
    if (this.pattern) {
      try {
        this.validUrlPattern = new RegExp(this.pattern);
      } catch (e) {
        console.error('Invalid regular expression pattern:', this.pattern);
        this.validUrlPattern = /^(ftp|http|https):\/\/[^ "]+$/; 
      }
    }
  }

  @HostListener('blur') onBlur() {
    const value = this.control.control?.value;
    if (value && !this.validUrlPattern.test(value)) {
      this.control.control?.setErrors({ invalidUrl: true });
    } else {
      this.control.control?.setErrors(null);
    }
  }
}
