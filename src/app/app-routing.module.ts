import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemGalleryComponent} from "./item-gallery/item-gallery.component";
import {AddItemComponent} from "./add-item/add-item.component";
import {ItemDetailComponent} from "./item-detail/item-detail.component";

const routes: Routes = [
  {path: '', redirectTo:'/items', pathMatch:'full'},
  {path: 'items', component: ItemGalleryComponent},
  {path: 'items/add', component: AddItemComponent},
  {path: 'items/:id', component: ItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
