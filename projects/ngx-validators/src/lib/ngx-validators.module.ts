import { NgModule } from '@angular/core';
import { EmptyStringValidatorDirective } from './validators/empty-string-validator.directive';

@NgModule({
  declarations: [EmptyStringValidatorDirective],
  imports: [],
  exports: [EmptyStringValidatorDirective]
})
export class NgxValidatorsModule { }
