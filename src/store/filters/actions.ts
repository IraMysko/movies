import { SET_SEARCH_TEXT, SET_SORT_TYPE } from './constants';
import { setSortAction, SearchTextAction } from './types';

export const setSearchText = (text: string): SearchTextAction => ({
  type: SET_SEARCH_TEXT,
  payload: text,
});

export const setSortType = (value: string): setSortAction => ({
  type: SET_SORT_TYPE,
  payload: value,
});
