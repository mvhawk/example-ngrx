import { ActionReducerMap } from "@ngrx/store";
import { ItemsState } from "../model/item.state";
import { counterReducer } from "./reducer/counter.reducer";
import { itemsReducer } from "./reducer/items.reducer";

export interface AppState{
  items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  items: itemsReducer
}
