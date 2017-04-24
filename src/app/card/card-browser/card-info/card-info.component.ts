import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Card } from "../../card";
import { CardService }       from '../../card.service';

export class CustomModalContext extends BSModalContext {
    public card: Card;
}

@Component({
  selector: 'card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements CloseGuard, ModalComponent<CustomModalContext>, OnInit {
  context: CustomModalContext;
  card: Card;

  constructor(private cardService: CardService,public dialog: DialogRef<CustomModalContext>){
    this.context = dialog.context;
    this.card = this.context.card;
    dialog.setCloseGuard(this);
  }
  
  ngOnInit(): void {
    this.card = this.context.card;
  }
  close(){
    this.dialog.close();
  }

}
