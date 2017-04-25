import {  Pipe,  PipeTransform,  Injectable } from '@angular/core';
import { Card } from "../../card";

@Pipe({
  name: 'raceSort',
  pure: false
})
@Injectable()
export class RaceSortPipe implements PipeTransform {
  transform(items: Card[], race: any): any {
    let selectedCards: Card[] = new Array();
    if (race != undefined) {
      items.forEach(card => {
        if (card.racesOrTraits) {
          card.racesOrTraits.forEach(cardRace => {
            if (cardRace.toLowerCase().indexOf(race.toLowerCase()) !== -1) {
              selectedCards.push(card);
            }
          });
        }
      });
      return selectedCards;
    } else {
      return items;
    }
  }
}
/*
   for (let card of items) {
     let selectedRaces: String[];
     selectedRaces = card.racesOrTraits.filter(r => r.toLowerCase().indexOf(race.toLowerCase()) !== -1);
     if (selectedRaces.length > 0) {
       selectedCards.push(card);
     }
   }
   return selectedCards;
   */
