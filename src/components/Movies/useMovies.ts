import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { selectMovies } from '../../store/movies/selectors';
import { selectGroup } from '../../store/filters/selectors';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { getMovies, removeMovie } from '../../store/movies/operations';

const useMovies = () => {
  const movies = useTypedSelector(selectMovies);
  const { searchText, sortType } = useTypedSelector(selectGroup);
  const dispatch = useDispatch();

  const makeHandleDeleteMovie = (id: number) => () => {
    dispatch(removeMovie(id));
  };

  useEffect(() => {
    dispatch(getMovies({ search: searchText, sort: sortType }));
  }, [dispatch, searchText, sortType]);

  return {
    movies,
    makeHandleDeleteMovie,
  };
};

export default useMovies;
