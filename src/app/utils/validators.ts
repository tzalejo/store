import { AbstractControl } from '@angular/forms';

export class MyValidators{

  //valido con un precio q no supere 10000
  static isPriceValid(control: AbstractControl){
    const value = control.value;
    console.log(value);
    if (value>10000) {
      return {price_invalid: true};
    }
    return null;
  }

  // static createValidator(service: MyService) {
  //   return (control: AbstractControl) => {
  //     return service.checkEmailNotTaken(control.value).map(res => {
  //       return res ? null : { emailTaken: true };
  //     });
  //   };
  // }

  // en el componente: email: ['', [], [MyValidators.createValidator(this.service)]]
}
