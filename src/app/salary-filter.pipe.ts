import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salaryFilter',
  pure:false
})
export class SalaryFilterPipe implements PipeTransform {

  transform(value:any, v: number): [] {
   
   
    return  value.filter(p=>p.salary >= v);
  }

}
