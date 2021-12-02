import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {environment} from "../environments/environment";
import {Observable, of} from "rxjs";
import {Item} from "./model/Item";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private url = `${environment.backendUrl}/items`

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url).pipe(
      map((items) => items.sort((a: Item, b: Item) => a.name.localeCompare(b.name))
      )
    )
  }

  searchItems(term:string):Observable<Item[]>{
    if(!term.trim()){
      return of([]);
    }

    return this.http.get<Item[]>(`${this.url}/`)
  }
}
