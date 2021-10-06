import { createSelector } from 'reselect';
import { RootState } from '../store';
import { AuthType } from './types';

export const selectAuth = (state: RootState): AuthType => state.auth;

export const selectIsAuth = createSelector(selectAuth, (auth) => auth.isAuth);
