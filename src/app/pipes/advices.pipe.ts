import { Pipe, PipeTransform } from '@angular/core';
import { Advice } from '../models/advice';

@Pipe({
  name: 'advices',
  standalone: true
})
export class AdvicesPipe implements PipeTransform {

  transform(values: Advice[], filter: string): Advice[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: Advice) => {
      const descFound = value.descripcion.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const temaFound = value.tema.descripcion.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      if (descFound || temaFound) {
        
        return value;
      }

      return "";
    });
  }

}
