import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("iniciando info...");
    
  }

}
