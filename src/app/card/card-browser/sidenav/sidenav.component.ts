import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output("name") nameValueEvent: EventEmitter<string> = new EventEmitter();
  @Output("race") raceValueEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  passName(name:string){
    this.nameValueEvent.emit(name);
  }
  passRace(race:string){
    this.raceValueEvent.emit(race);
  }

}
