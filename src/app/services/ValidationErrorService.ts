import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationErrorService {

  /**
   * Transforms angular ValidationErrors to iterable string array.
   * Otherwise ValidationErrors can be iterated through in template.
   * @param validationErrors - validation errors object from template variable
   */
  public transformValidationErrorsToArray(validationErrors: ValidationErrors): string[] {
    return Object.keys(validationErrors).map(key => validationErrors[key]);
  }

}
