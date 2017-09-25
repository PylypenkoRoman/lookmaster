import { FormControl } from "@angular/forms/forms";

export function emailValidator(input: FormControl) {
  var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const forbidden = EMAIL_REGEXP.test(input.value);
  return forbidden ? null : {'email': {value: input.value}};

}