import { Dispatch } from 'redux';
import axios from '../../axios';
import { SortedType } from '../../constants';
import { loadMovies, loadMovie, addMovie, deleteMovie, importMovies } from './actions';

const MOVIES_URL = '/movies';

export const getMovies = ({ search, sort }: { search: string; sort: SortedType }) => {
  return async (dispatch: Dispatch) => {
    const params =
      search.length > 1
        ? {
            search,
            sort,
          }
        : { sort };

    const response = await axios(MOVIES_URL, {
      params,
    });
    const movies = response.data.data;

    if (movies) {
      dispatch(loadMovies(movies));
    }
  };
};

export const addNewMovie = ({
  title,
  year,
  format,
  actors,
}: {
  title: string;
  year: number;
  format: string;
  actors: Array<string>;
}) => {
  return async (dispatch: Dispatch) => {
    const response = await axios.post(MOVIES_URL, {
      title,
      year,
      format,
      actors,
    });

    dispatch(addMovie(response.data.data));
  };
};

export const importMovie = (file: any) => {
  return async (dispatch: Dispatch) => {
    const formData = new FormData();
    formData.append('movies', file, file.name);

    const response = await axios.post(`${MOVIES_URL}/import`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        accept: 'text/plain',
      },
    });

    dispatch(importMovies(response.data.data));
  };
};

export const showMovie = (id: number) => {
  return async (dispatch: Dispatch) => {
    const response = await axios(`${MOVIES_URL}/${id}`);
    const movie = response.data.data;

    dispatch(loadMovie(movie));
  };
};

export const removeMovie = (id: number) => {
  return async (dispatch: Dispatch) => {
    await axios.delete(`${MOVIES_URL}/${id}`);

    dispatch(deleteMovie(id));
  };
};
