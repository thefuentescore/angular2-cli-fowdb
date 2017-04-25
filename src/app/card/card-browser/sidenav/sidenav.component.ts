import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Format } from "../../card";
import { CardService }       from '../../card.service';
@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output("name") nameValueEvent: EventEmitter<string> = new EventEmitter();
  @Output("race") raceValueEvent: EventEmitter<string> = new EventEmitter();
  @Output("attr") attributeValueEvent: EventEmitter<string> = new EventEmitter();
  @Output("format") formatValueEvent: EventEmitter<Format> = new EventEmitter();

  formats: Format[];
  selectedFormat: Format;

  constructor(private cardService: CardService,) { }
  ngOnInit(): void {
    this.getFormats();
  }

  getFormats(): void {
    this.cardService
      .getFormats()
      .then(formats => this.formats = formats);     
  }

  passName(name:string){
    this.nameValueEvent.emit(name);
  }
  passRace(race:string){
    this.raceValueEvent.emit(race);
  }
  passAttribute(attr:string){
    this.attributeValueEvent.emit(attr);
  }
  passFormat(format: Format){
    this.formatValueEvent.emit(format);
  }

}
