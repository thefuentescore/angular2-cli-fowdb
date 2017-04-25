import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardModule } from "./card/card.module";

import { routes } from "./app.routes";
import { AboutComponent } from './about/about.component';
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
