import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-browser',
  templateUrl: './card-browser.component.html',
  styleUrls: ['./card-browser.component.scss']
})
export class CardBrowserComponent implements OnInit {
  searchedName: string;
  searchedRace: string;
  
  constructor() { }

  ngOnInit() {
  }
}
