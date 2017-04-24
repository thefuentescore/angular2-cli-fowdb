import { Component, ViewContainerRef, OnInit, Input} from '@angular/core';
import { Overlay, overlayConfigFactory } from "angular2-modal";
import { Modal }   from 'angular2-modal/plugins/bootstrap';

import { Card }              from '../../card';
import { CardService }       from '../../card.service';
import { CardInfoComponent, CustomModalContext} from "../card-info/card-info.component";

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  providers: [Modal]
})
export class CardListComponent implements OnInit {
  
  @Input() searchedName: string;
  @Input() searchedRace: string;
  cards: Card[];


  constructor(private cardService: CardService, public modal: Modal) {
    
  }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService
      .getCards()
      .then(cards => this.cards = cards);     
  }

  showCardInfo(selectedCard: Card){
    return this.modal.open(CardInfoComponent, overlayConfigFactory(
      {
        card: selectedCard
      },
      CustomModalContext ));
  }
}
