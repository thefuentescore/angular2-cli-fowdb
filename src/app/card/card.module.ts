import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CardListComponent } from './card-browser/card-list/card-list.component';
import { CardBrowserComponent } from './card-browser/card-browser.component';
import { NameSortPipe } from './card-browser/card-list/name-sort.pipe';
import { RaceSortPipe } from './card-browser/card-list/race-sort.pipe';

import { CardService } from "./card.service";
import { SidenavComponent } from './card-browser/sidenav/sidenav.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ CardListComponent, CardBrowserComponent, NameSortPipe, RaceSortPipe, SidenavComponent ],
  providers: [ CardService ],
  exports: [CardListComponent, CardBrowserComponent]
})
export class CardModule { }
