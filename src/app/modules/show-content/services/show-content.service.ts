import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShowContentService {
  private url: string = 'https://62a5f961430ba53411cf5832.mockapi.io/api/v1/examples/items'

  constructor(private http: HttpClient) { }

  public getItems(): Observable<any>{
    return this.http.get(this.url);
  }
}
