import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadItems } from 'src/app/state/action/items.action';
import { Observable } from 'rxjs';
import { selectLoading } from 'src/app/state/selector/items.selector';

@Component({
  selector: 'app-show-content-page',
  templateUrl: './show-content-page.component.html',
  styleUrls: ['./show-content-page.component.css']
})

export class ShowContentPageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();
  constructor(
    private store: Store<any>,
    ) { }

  ngOnInit(): void {
    console.log('ShowContentPageComponent');
    this.loading$ = this.store.select(selectLoading)
    this.store.dispatch(loadItems())
  }

}
