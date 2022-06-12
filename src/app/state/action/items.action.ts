import { Item } from '../../model/item.interface';
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Item List] Load items');
export const loadedItems = createAction(
  '[Item List] Loaded success',
  props<{ items: Item[]}>());
