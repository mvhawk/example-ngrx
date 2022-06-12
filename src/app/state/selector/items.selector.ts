import { createSelector } from '@ngrx/store';
import { ItemsState } from 'src/app/model/item.state';
import { AppState } from '../app.state';

export const selectorItemsFeature = (state: AppState) => state.items;

export const selectListItems = createSelector(
  selectorItemsFeature,
  (state: ItemsState) => state.items
);

export const selectLoading = createSelector(
  selectorItemsFeature,
  (state: ItemsState) => state.loading
);

