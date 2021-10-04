import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SortedType } from '../../constants';
import { useTypedSelector } from '../../hook/useTypedSelector';
import { setSearchText, setSortType } from '../../store/filters/actions';
import { selectSortType } from '../../store/filters/selectors';

const useHeader = () => {
  const dispatch = useDispatch();
  const sortType = useTypedSelector(selectSortType);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleFindMovie = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(event.target.value));
  };

  const handleChange = (value: SortedType) => {
    dispatch(setSortType(value));
  };

  return {
    sortType,
    handleChange,
    handleFindMovie,
    handleOpenModal,
    isModalVisible,
    handleCloseModal,
  };
};

export default useHeader;
