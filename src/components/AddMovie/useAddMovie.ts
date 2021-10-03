import { RcFile } from 'antd/lib/upload';
import { useDispatch } from 'react-redux';
import { addImportMovies, addMovie } from '../../store/movies/actions';
import { Values } from '../../types';
import { generateUniqNumbers } from '../../utils';

const useAddMovie = (handleCloseModal: () => void) => {
  const dispatch = useDispatch();

  const handleAddMovie = (values: Values): void => {
    const newMovie = {
      ...values,
      id: generateUniqNumbers(),
      actors: [{ id: generateUniqNumbers(), name: values.actors }],
    };
    dispatch(addMovie(newMovie));
  };

  const beforeUpload = (file: RcFile) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result || '';

      if (typeof text !== 'string') return;

      const array = text.split(/\n\s*\n/);

      const newMovies = array.map((str) => {
        const item = str.split(/\r\n/);
        const [title, year, format, actors] = item.map((result) =>
          result.replace(/(.*?: )/, ''),
        );

        return {
          id: generateUniqNumbers(),
          title,
          year: +year,
          format,
          actors: actors.split(', ').map((actor) => ({
            id: generateUniqNumbers(),
            name: actor,
          })),
        };
      });

      dispatch(addImportMovies(newMovies));
      handleCloseModal();
    };

    reader.readAsText(file);
  };
  return {
    handleAddMovie,
    beforeUpload,
  };
};

export default useAddMovie;
