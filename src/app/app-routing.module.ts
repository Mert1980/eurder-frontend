import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemGalleryComponent} from "./item-gallery/item-gallery.component";
import {AddItemComponent} from "./add-item/add-item.component";

const routes: Routes = [
  {path: '', redirectTo:'/items', pathMatch:'full'},
  {path: 'items', component: ItemGalleryComponent},
  {path: 'items/add', component: AddItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
