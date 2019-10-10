import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {
  // para tranformar datos..
  transform(value: number): any {
    return Math.pow(value,2);
  }


}
