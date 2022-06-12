import { createReducer, on } from "@ngrx/store";
import { ItemsState } from 'src/app/model/item.state';
import { loadedItems, loadItems } from 'src/app/state/action/items.action';

export const initialState: ItemsState = { loading: false, items: [] };

export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedItems, (state, {items}) => {
    return { ...state, loading: false, items }
  })
)
