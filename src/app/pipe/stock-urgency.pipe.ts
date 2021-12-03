import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'stockUrgency'})
export class StockUrgencyPipe implements PipeTransform {
  transform(stockUrgency: string) : string{
   switch (stockUrgency){
     case 'STOCK_LOW':return 'red';
     case 'STOCK_MEDIUM':return 'orange';
     default: return 'green'
   }
  }

}
