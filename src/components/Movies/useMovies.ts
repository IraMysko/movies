import { useDispatch } from 'react-redux';

import { selectMovies } from '../../store/movies/selectors';
import { selectGroup } from '../../store/filters/selectors';
import { Movie } from '../../types';
import { getSortedMovies } from '../../utils';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { deleteMovie } from '../../store/movies/actions';

const useMovies = () => {
  const movies = useTypedSelector(selectMovies);
  const { searchText, sortType } = useTypedSelector(selectGroup);
  const dispatch = useDispatch();

  const makeHandleDeleteMovie = (id: number) => () => {
    dispatch(deleteMovie(id));
  };

  const sortedMovies: Movie[] = getSortedMovies(sortType, movies);

  const visibleMovies = searchText
    ? sortedMovies.filter(({ title, actors }) => {
        const search = searchText.toLowerCase();
        const actorNames = actors.map(({ name }) => name.toLowerCase());

        return title.toLowerCase().includes(search) || actorNames.includes(search);
      })
    : sortedMovies;
  return {
    visibleMovies,
    makeHandleDeleteMovie,
  };
};

export default useMovies;
