import { Routes } from '@angular/router';

import { CardBrowserComponent } from "./card/card-browser/card-browser.component";
import { CardInfoComponent }    from "./card/card-browser/card-info/card-info.component";
import { AboutComponent }       from "./about/about.component";

export const routes: Routes = [
  { path: '', redirectTo: '/browser', pathMatch: 'full' },
  {
    path: 'browser', component: CardBrowserComponent, children: [
      { path: ':id', component: CardInfoComponent }
    ]
  },
  { path: 'about', component: AboutComponent}
];
