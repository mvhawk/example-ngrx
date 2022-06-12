import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/model/item.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('header');
  }

  addItem(): void {
    const dataItem: Item = {
      id: 100,
      createdAt: new Date(),
      name: 'pepe',
      price: 1,
      image: 'https://lh3.googleusercontent.com/0FzDWftLAKj7eb2zym0h8WhlS1w0fj-YE2SVOdogxyuE9xNPRhWG_8V0JN-TiH6C00x1BxHEB5tE7xbWmP4FaMZBY0hTgvhvJbQdtQ=w286',
      brand: 'brand',
      description: 'description'
    }
  }
}
