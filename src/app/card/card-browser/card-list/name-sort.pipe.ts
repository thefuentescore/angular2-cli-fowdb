import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'nameSort',
  pure: false
})
@Injectable()
export class NameSortPipe implements PipeTransform {
  transform(items: any[], name: any): any {
    if (name != undefined) {
      // filter items array, items which match and return true will be kept, false will be filtered out
      return items.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
    }
    return items;
  }
}
