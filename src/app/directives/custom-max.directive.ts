import {Directive, Input} from '@angular/core';
import {FormControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomMax]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMaxDirective, multi: true}]
})
export class CustomMaxDirective implements Validator {

  @Input()
  customMax: number;

  custom;

  validate(c: FormControl): { [key: string]: any } {
    const v = c.value;
    return (v > this.customMax) ? {customMax: true} : null;
  }

  constructor() {
  }

}
