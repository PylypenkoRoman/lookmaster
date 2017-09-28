import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Validator } from "@angular/forms";
import { emailValidator } from "./email.validator";

@Directive({
  selector: '[emailValidatorTD]',
  providers: [{provide: NG_VALIDATORS, useExisting: emailValidator, multi: true}]
})
export class EmailTDValidator implements Validator {
  @Input() email: string;
  validate(control: AbstractControl): {[key: string]: any} {
    return this.email ? null : null;
  }

}
