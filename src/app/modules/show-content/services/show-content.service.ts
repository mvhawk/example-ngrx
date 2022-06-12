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

  getDataApi(): Observable<any> {
    const data = [
      {
        name: "Pudgy Penguin #1",
        price: 0.2,
        image: "https://api.pudgypenguins.io/penguin/image/1"
      },
      {
        name: "Pudgy Penguin #2",
        price: 0.1,
        image: "https://api.pudgypenguins.io/penguin/image/2"
      },
      {
        name: "Pudgy Penguin #3",
        price: 0.3,
        image: "https://api.pudgypenguins.io/penguin/image/3"
      },
      {
        name: "Pudgy Penguin #4",
        price: 0.4,
        image: "https://api.pudgypenguins.io/penguin/image/4"
      },
      {
        name: "Pudgy Penguin #5",
        price: 0.5,
        image: "https://api.pudgypenguins.io/penguin/image/5"
      },
      {
        name: "Pudgy Penguin #6",
        price: 0.6,
        image: "https://api.pudgypenguins.io/penguin/image/6"
      },
      {
        name: "Pudgy Penguin #7",
        price: 0.7,
        image: "https://api.pudgypenguins.io/penguin/image/7"
      },
      {
        name: "Pudgy Penguin #8",
        price: 0.8,
        image: "https://api.pudgypenguins.io/penguin/image/8"
      },
      {
        name: "Pudgy Penguin #9",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/9"
      },
      {
        name: "Pudgy Penguin #10",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/10"
      },
      {
        name: "Pudgy Penguin #11",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/11"
      },
      {
        name: "Pudgy Penguin #12",
        price: 0.9,
        image: "https://api.pudgypenguins.io/penguin/image/12"
      }
    ]

    return of(data).pipe(
      delay(1500)
    )
  }
}
