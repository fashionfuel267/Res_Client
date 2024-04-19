import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salarypipe'
})
export class SalarypipePipe implements PipeTransform {

  transform(value: number): number {
   if(value>=500000)
   return value;
  }

}
