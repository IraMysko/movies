import { LOAD_MOVIES, ADD_MOVIE, ADD_MOVIES, DELETE_MOVIE } from './constants';
import { MovieActions, MoviesType } from './types';

const initialState: MoviesType = {
  movies: [
    {
      id: 1,
      title: 'HEAD OF NAMES',
      year: 2017,
      format: 'DVD',
      actors: [],
    },
    {
      id: 2,
      title: 'vfdfdfdf',
      year: 1996,
      format: 'DVD',
      actors: [],
    },
    {
      id: 3,
      title: 'tttdvgfdddS',
      year: 2017,
      format: 'DVD',
      actors: [],
    },
    {
      id: 4,
      title: 'AAA',
      year: 2000,
      format: 'DVD',
      actors: [],
    },
  ],
};

export const moviesReducer = (state = initialState, action: MovieActions): MoviesType => {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case ADD_MOVIES:
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
