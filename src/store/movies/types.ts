import { Movies, Movie } from '../../types';
import { LOAD_MOVIES, ADD_MOVIE, ADD_MOVIES, DELETE_MOVIE } from './constants';

export type MoviesType = {
  movies: Movie[];
};

export type LoadMoviesAction = {
  type: typeof LOAD_MOVIES;
  payload: Movies;
};

export type AddMovieAction = {
  type: typeof ADD_MOVIE;
  payload: Movie;
};

export type addImportMoviesAction = {
  type: typeof ADD_MOVIES;
  payload: Movies;
};

export type DeleteMovieAction = {
  type: typeof DELETE_MOVIE;
  payload: number;
};

export type MovieActions =
  | LoadMoviesAction
  | AddMovieAction
  | addImportMoviesAction
  | DeleteMovieAction;
