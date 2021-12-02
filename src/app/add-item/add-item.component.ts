import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {ItemService} from "../item.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  createItemForm = this.formBuilder.group({
    name:'',
    description:'',
    price:'',
    amountOfStock:'',
    stockUrgency:''
  })

  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private location:Location) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.itemService.addItem(this.createItemForm.value)
      .subscribe(data => {
        console.log(data);
        this.createItemForm.reset();
        this.itemService.getItems();
      })
  }

  goBack() {
    this.location.back();
  }

  cancel() {
    this.createItemForm.reset();
  }
}
