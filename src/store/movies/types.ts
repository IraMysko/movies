import { Movies, Movie } from '../../types';
import {
  LOAD_MOVIES,
  LOAD_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIE,
} from './constants';

export type MoviesType = {
  movies: Movie[];
};

export type LoadMoviesAction = {
  type: typeof LOAD_MOVIES;
  payload: Movies;
};

export type LoadMovieAction = {
  type: typeof LOAD_MOVIE;
  payload: Movie;
};

export type AddMovieAction = {
  type: typeof ADD_MOVIE;
  payload: Movie;
};

export type ImportMoviesAction = {
  type: typeof IMPORT_MOVIE;
  payload: Movies;
};

export type DeleteMovieAction = {
  type: typeof DELETE_MOVIE;
  payload: number;
};

export type MovieActions =
  | LoadMoviesAction
  | LoadMovieAction
  | AddMovieAction
  | ImportMoviesAction
  | DeleteMovieAction;
