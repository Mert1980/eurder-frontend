import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { ItemGalleryComponent } from './item-gallery/item-gallery.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';
import { SearchItemComponent } from './search-item/search-item.component';
import {NameFilterPipe} from "./pipe/name-filter.pipe";
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemGalleryComponent,
    ItemComponent,
    SearchItemComponent,
    NameFilterPipe,
    AddItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    ItemGalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
