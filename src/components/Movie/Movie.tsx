import { useParams } from 'react-router';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { selectMovieById } from '../../store/movies/selectors';
import { Container } from './StyledMovie';

const Movie: React.FC = () => {
  const ids = useParams<{ id: string }>();
  const id = +ids;

  const movie = useTypedSelector((state) => selectMovieById(state, { id }));
  console.log('movie', movie);

  if (!movie) return null;

  return (
    <Container>
      <div>{movie?.title}</div>
      <div>{movie?.format}</div>
      <div>{movie?.year}</div>
      <div>{movie?.actors}</div>
    </Container>
  );
};

export default Movie;
