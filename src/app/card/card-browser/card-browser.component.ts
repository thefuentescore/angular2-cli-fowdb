import { Component, OnInit } from '@angular/core';

import { Format } from "../card";

@Component({
  selector: 'card-browser',
  templateUrl: './card-browser.component.html',
  styleUrls: ['./card-browser.component.scss']
})
export class CardBrowserComponent implements OnInit {
  searchedName: string;
  searchedRace: string;
  searchedAttr: string;
  searchedFormat: Format;
  
  constructor() { }

  ngOnInit() {
  }
}
