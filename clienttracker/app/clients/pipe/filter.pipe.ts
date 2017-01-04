import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe implements PipeTransform {
  transform(value, args) {
    if (!args || !args[0]) {
      return value;
    } else if (value) {
      return value.filter(item => {
        return (item.getFilterText().indexOf(args[0]) !== -1);
      });
    }
  }
}
