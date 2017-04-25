import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSort'
})
export class FormatSortPipe implements PipeTransform {
  transform(items: any, format: any): any {
    let selectedCards: any[] = new Array();
    if (format != undefined) {
      items.forEach((card) => {
        format.sets.forEach(set => {
          if (card.set.toLowerCase() == set.toLowerCase()) {
            if (format.banlist) {
              if (!format.banlist.includes(card.name)) {
                selectedCards.push(card);
              }
            } else {
              selectedCards.push(card);
            }
          }
        })
      })
      return selectedCards;
    } else {
      return items;
    }
  }
}
