import { createSelector, createStructuredSelector } from 'reselect';
import { SortedType } from '../../constants';
import { RootState } from '../store';
import { FiltersType } from './types';

export const selectFilters = (state: RootState): FiltersType => state.filters;

export const selectFoundText = createSelector(
  selectFilters,
  (filters) => filters.searchText,
);

export const selectSortType = createSelector(
  selectFilters,
  (filters) => filters.sortType,
);

export const selectGroup = createStructuredSelector<
  RootState,
  { searchText: string; sortType: SortedType }
>({
  searchText: selectFoundText,
  sortType: selectSortType,
});
