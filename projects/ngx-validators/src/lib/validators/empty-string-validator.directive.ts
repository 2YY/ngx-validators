import { Directive } from '@angular/core';
import {AbstractControl, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[libEmptyStringValidator]'
})
export class EmptyStringValidatorDirective {}

export const EmptyStringValidator = (control: AbstractControl): {[key: string]: any} | null => {
  const errorObj = {emptyString: {value: control.value}};
  return control.value.trim().length === 0 || new RegExp(/^[　 \s\t\n]+$/).test(control.value) ? errorObj : null;
};
