import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { showMovie } from '../../store/movies/operations';
import { selectMovieById } from '../../store/movies/selectors';
import { Container, MovieDescribe, MovieContainer } from './StyledMovie';

const Movie: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showMovie(+id));
  }, [dispatch, id]);

  const movie = useTypedSelector((state) => selectMovieById(state, { id: +id }));

  if (!movie) return null;

  return (
    <Container>
      <MovieContainer>
        <h1>{movie.title}</h1>
        <MovieDescribe>Year: {movie.year}</MovieDescribe>
        <MovieDescribe>Format: {movie.format}</MovieDescribe>
        {movie.actors && (
          <MovieDescribe>
            Actors:
            <div>
              {movie.actors.map((actor) => {
                return <div key={actor.id}>{actor.name}</div>;
              })}
            </div>
          </MovieDescribe>
        )}
      </MovieContainer>
    </Container>
  );
};

export default Movie;
