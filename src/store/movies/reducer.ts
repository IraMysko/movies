import {
  LOAD_MOVIES,
  LOAD_MOVIE,
  ADD_MOVIE,
  DELETE_MOVIE,
  IMPORT_MOVIE,
} from './constants';
import { MovieActions, MoviesType } from './types';

const initialState: MoviesType = {
  movies: [],
};

export const moviesReducer = (state = initialState, action: MovieActions): MoviesType => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case LOAD_MOVIE:
      return {
        ...state,
        movies: state.movies.some((movie) => movie.id === action.payload.id)
          ? [
              ...state.movies.map((movie) =>
                movie.id === action.payload.id ? action.payload : movie,
              ),
            ]
          : [...state.movies, action.payload],
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case IMPORT_MOVIE:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};
