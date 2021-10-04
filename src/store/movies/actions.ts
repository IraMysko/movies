import { Movie, Movies } from '../../types';
import {
  LOAD_MOVIES,
  LOAD_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIE,
} from './constants';
import {
  LoadMoviesAction,
  LoadMovieAction,
  AddMovieAction,
  ImportMoviesAction,
  DeleteMovieAction,
} from './types';

export const loadMovies = (movies: Movies): LoadMoviesAction => ({
  type: LOAD_MOVIES,
  payload: movies,
});

export const loadMovie = (movie: Movie): LoadMovieAction => ({
  type: LOAD_MOVIE,
  payload: movie,
});

export const importMovies = (movie: Movies): ImportMoviesAction => ({
  type: IMPORT_MOVIE,
  payload: movie,
});

export const addMovie = (movie: Movie): AddMovieAction => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const deleteMovie = (id: number): DeleteMovieAction => ({
  type: DELETE_MOVIE,
  payload: id,
});
