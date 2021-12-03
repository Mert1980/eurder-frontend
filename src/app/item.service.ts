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

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

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

  addItem(item:Item): Observable<Item>{
    return this.http.post<Item>(this.url, item);
  }

  getItem(id : string | null): Observable<Item>{
    return this.http.get<Item>(`${this.url}/${id}`)
  }

  updateItem(item: Item, id: string): Observable<any> {
    console.log("id:" + id)
    return this.http.put(`${this.url}/${id}`, item, this.httpOptions);
  }
}
