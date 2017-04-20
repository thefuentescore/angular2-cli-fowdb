import { Component, OnInit, Input } from '@angular/core';
import { Card }              from '../../card';
import { CardService }       from '../../card.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  @Input() searchedName: string;
  @Input() searchedRace: string;
  cards: Card[];

  constructor(private cardService: CardService) {
    
  }

  getCards(): void {
    this.cardService
      .getCards()
      .then(cards => this.cards = cards);     
  }

  ngOnInit(): void {
    this.getCards();
  }

}
