import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';

import { ModalModule } from "angular2-modal";
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { CardListComponent } from './card-browser/card-list/card-list.component';
import { CardBrowserComponent } from './card-browser/card-browser.component';
import { NameSortPipe } from './card-browser/card-list/name-sort.pipe';
import { RaceSortPipe } from './card-browser/card-list/race-sort.pipe';
import { CardService } from "./card.service";
import { SidenavComponent } from './card-browser/sidenav/sidenav.component';
import { CardInfoComponent } from './card-browser/card-info/card-info.component';
import { AttributeSortPipe } from './card-browser/card-list/attribute-sort.pipe';

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
  declarations: [ CardListComponent, CardBrowserComponent, NameSortPipe, RaceSortPipe, SidenavComponent, CardInfoComponent, AttributeSortPipe ],
  providers: [ CardService ],
  exports: [CardListComponent, CardBrowserComponent],
  entryComponents:[CardInfoComponent]
})
export class CardModule { }
