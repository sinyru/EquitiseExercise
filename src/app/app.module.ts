import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';
import { HomeComponent } from './home/home.component';
import { SearchOfferComponent } from './search-offer/search-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    OffersComponent,
    HomeComponent,
    SearchOfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
