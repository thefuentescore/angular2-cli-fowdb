import { Routes } from '@angular/router';

import { CardBrowserComponent } from "./card/card-browser/card-browser.component";
import { CardInfoComponent } from "./card/card-browser/card-info/card-info.component";

export const routes: Routes = [
  { path: '', redirectTo: '/browser', pathMatch: 'full' },
  {
    path: 'browser', component: CardBrowserComponent, children: [
      { path: ':id', component: CardInfoComponent }
    ]
  }
];
