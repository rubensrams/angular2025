import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'advices',
  standalone: true
})
export class AdvicesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
