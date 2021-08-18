import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'surnameCut'
})
export class SurnameCutPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    } else {
      return value.charAt(0) + '.';
    }
  }

}
