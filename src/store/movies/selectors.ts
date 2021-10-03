import { createSelector } from 'reselect';

import { Movie } from '../../types';
import { RootState } from '../store';

export const selectMovies = (state: RootState): Movie[] => state.movies.movies;

export const selectMovieIdFromProps = (
  _state: RootState,
  props: { id: number },
): number => props.id;

export const selectMovieById = createSelector(
  selectMovies,
  selectMovieIdFromProps,
  (movies, id): Movie | undefined => movies.find((movie) => movie.id === id),
);
