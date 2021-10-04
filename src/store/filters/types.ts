import { SortedType } from '../../constants';
import { SET_SEARCH_TEXT, SET_SORT_TYPE } from './constants';

export type FiltersType = {
  searchText: string;
  sortType: SortedType;
};

export type SetSortAction = {
  type: typeof SET_SORT_TYPE;
  payload: SortedType;
};

export type SearchTextAction = {
  type: typeof SET_SEARCH_TEXT;
  payload: string;
};

export type ActionType = SetSortAction | SearchTextAction;
