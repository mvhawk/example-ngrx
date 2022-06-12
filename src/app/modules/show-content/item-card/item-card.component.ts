import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListItems } from 'src/app/state/selector/items.selector';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  items$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.items$ = this.store.select(selectListItems)
  }

}
