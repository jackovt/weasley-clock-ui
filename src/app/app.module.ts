import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LocationListComponent }  from './location-list.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    LocationListComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
