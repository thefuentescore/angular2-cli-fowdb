import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from "angular2-modal";
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { CardInfoComponent } from './card-browser/card-info/card-info.component';
import { CardListComponent } from './card-browser/card-list/card-list.component';
import { CardBrowserComponent } from './card-browser/card-browser.component';
import { SidenavComponent } from './card-browser/sidenav/sidenav.component';


import { CardService } from "./card.service";

import { NameSortPipe } from './card-browser/card-list/pipes/name-sort.pipe';
import { RaceSortPipe } from './card-browser/card-list/pipes/race-sort.pipe';
import { AttributeSortPipe } from './card-browser/card-list/pipes/attribute-sort.pipe';
import { FormatSortPipe } from './card-browser/card-list/pipes/format-sort.pipe';


const appRoutes: Routes = [
  { path: 'card-browser', component: CardBrowserComponent }
];

@NgModule({
  imports: [ 
    CommonModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [ CardListComponent, CardBrowserComponent, NameSortPipe, RaceSortPipe, SidenavComponent, CardInfoComponent, AttributeSortPipe, FormatSortPipe ],
  providers: [ CardService ],
  exports: [CardListComponent, CardBrowserComponent],
  entryComponents:[CardInfoComponent]
})
export class CardModule { }
