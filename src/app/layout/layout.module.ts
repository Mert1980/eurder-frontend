import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import {ItemGalleryComponent} from "../item-gallery/item-gallery.component";
import {RouterModule} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
  ],
  exports: [
    LayoutComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        MatToolbarModule
    ]
})
export class LayoutModule { }
