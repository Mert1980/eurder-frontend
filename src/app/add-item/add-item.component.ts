import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import {ItemService} from "../item.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService: ItemService, private formBuilder: FormBuilder, private location:Location) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void{
    this.itemService.addItem(form.value)
      .subscribe(data => {
        console.log(data);
        form.reset();
        this.itemService.getItems();
      })
  }


  goBack() {
    this.location.back();
  }

  cancel(form: NgForm) {
    form.reset();
  }
}
