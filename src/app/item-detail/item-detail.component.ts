import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from "@angular/router";
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import {Item} from "../model/Item";
import {ItemService} from "../item.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  selectedId: string | any;
  selectedItem : Observable<Item> | any

  updateItemForm = this.formBuilder.group({
    name:'',
    description:'',
    price:'',
    amountOfStock:'',
  })

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private location:Location) { }

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(this.selectedId).subscribe(item => this.selectedItem = item);
  }

  onSubmit(): void{
    console.log("selectedId:" + this.selectedId);
    this.itemService.updateItem(this.updateItemForm.value, this.selectedId)
      .subscribe(data => {
        this.updateItemForm.reset();
        this.itemService.getItems();
        this.router.navigate([`/items/${this.selectedId}`]);
      })
  }

  goBack() {
    this.location.back();
  }

}
