import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Card } from '../../card';

@Pipe({
  name: 'attributeSort'
})
@Injectable()
export class AttributeSortPipe implements PipeTransform {
  transform(items: any[], attr: any): any {
    var selectedCards: Card[] = [];
    if (attr != undefined) {
      for(let card of items){
        if(card.attribute){
          if(card.attribute.toLowerCase().indexOf(attr.toLowerCase()) !== -1){
            selectedCards.push(card);
          }
        }
      }
      return selectedCards;
    }
    return items;
  }
}
