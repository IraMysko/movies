import { Dispatch } from 'redux';
import axios from '../../axios';
import { loadMovies, addMovie, deleteMovie } from './actions';

export const getMovies = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios('/');
    const movies = response.data;

    dispatch(loadMovies(movies));
  };
};

export const addNewMovie = (
  title: string,
  year: number,
  format: string,
  actors: Array<string>,
) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post('/movies/', {
      title,
      year,
      format,
      actors,
    });

    dispatch(addMovie(response.data));
  };
};

export const removeMovie = (id: number) => {
  return async (dispatch: Dispatch) => {
    await axios.delete(`/movies/${id}`);

    dispatch(deleteMovie(id));
  };
};
