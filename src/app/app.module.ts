import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app/header/header.component';
import { WinesComponent } from './wines/wines.component';
import { WineListComponent } from './wines/wine-list/wine-list.component';
import { WineDetailsComponent } from './wines/wine-details/wine-details.component';
import { WineItemComponent } from './wines/wine-list/wine-item/wine-item.component';
import { WineCartComponent } from './wine-cart/wine-cart.component';
import { WineCartEditComponent } from './wine-cart/wine-cart-edit/wine-cart-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesComponent,
    WineListComponent,
    WineDetailsComponent,
    WineItemComponent,
    WineCartComponent,
    WineCartEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
