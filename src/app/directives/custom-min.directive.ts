import {Directive, Input} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appCustomMin]',
  providers: [{provide: NG_VALIDATORS, useExisting: CustomMinDirective, multi: true}]
})
export class CustomMinDirective implements Validator {

  @Input()
  customMin: number;

  constructor() {
  }

  validate(c: AbstractControl): ValidationErrors | null {
    const v = c.value;
    const errors: ValidationErrors = {};
    if (v < this.customMin) {
      errors.customMinError = `Number cannot be less then ${this.customMin}`;
      return errors;
    }
  }

}
