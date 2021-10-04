import { RcFile } from 'antd/lib/upload';
import { useDispatch } from 'react-redux';

import { addNewMovie, importMovie } from '../../store/movies/operations';
import { Values } from '../../types';

const useAddMovie = (handleCloseModal: () => void) => {
  const dispatch = useDispatch();

  const handleAddMovie = (values: Values): void => {
    const newMovie = {
      title: values.title,
      year: +values.year,
      format: values.format,
      actors: [values.actors],
    };
    dispatch(addNewMovie(newMovie));
    handleCloseModal();
  };

  const beforeUpload = (file: RcFile) => {
    dispatch(importMovie(file));
    handleCloseModal();
  };

  return {
    handleAddMovie,
    beforeUpload,
  };
};

export default useAddMovie;
