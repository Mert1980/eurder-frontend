import { Pipe, PipeTransform } from "@angular/core";
import { Item } from "../model/Item";

@Pipe({name:'nameFilter'})
export class NameFilterPipe implements PipeTransform {
  transform(pets: Item[], searchText: string) : any[] {
    return pets.filter(pet => {
      return pet.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }

}
