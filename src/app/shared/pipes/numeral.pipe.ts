import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeral',
  standalone: true
})
export class NumeralPipe implements PipeTransform {

  transform(value: number | string): string {
    return `${value}.`;
  }

}
