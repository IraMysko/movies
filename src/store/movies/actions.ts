import { Movie, Movies } from '../../types';
import { LOAD_MOVIES, ADD_MOVIE, ADD_MOVIES, DELETE_MOVIE } from './constants';
import {
  LoadMoviesAction,
  AddMovieAction,
  addImportMoviesAction,
  DeleteMovieAction,
} from './types';

export const loadMovies = (movies: Movies): LoadMoviesAction => ({
  type: LOAD_MOVIES,
  payload: movies,
});

export const addMovie = (movie: Movie): AddMovieAction => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const addImportMovies = (movies: Movies): addImportMoviesAction => ({
  type: ADD_MOVIES,
  payload: movies,
});

export const deleteMovie = (id: number): DeleteMovieAction => ({
  type: DELETE_MOVIE,
  payload: id,
});
