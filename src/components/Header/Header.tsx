import { Button, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons/lib/icons';

import { Routes, SortedType } from '../../constants';
import AddMovie from '../AddMovie';
import { Container, StyledLink, StyledInput } from './StyledHeader';
import useHeader from './useHeader';

const { Option } = Select;

const Header: React.FC = () => {
  const {
    sortType,
    handleChange,
    handleFindMovie,
    handleOpenModal,
    isModalVisible,
    handleCloseModal,
  } = useHeader();

  return (
    <Container>
      <StyledLink to={Routes.Movies}>MOVIES</StyledLink>

      <div>
        <Select
          className="btn-sort"
          defaultValue={sortType}
          style={{ width: 120 }}
          onChange={handleChange}
        >
          <Option value={SortedType.ByName}>By name</Option>
          <Option value={SortedType.ByYear}>By year</Option>
        </Select>
        <StyledInput
          onChange={handleFindMovie}
          defaultValue=""
          placeholder="Enter movie or actor"
          prefix={<SearchOutlined />}
        />
      </div>

      <Button type="primary" onClick={handleOpenModal}>
        Add Movies
      </Button>

      {isModalVisible && (
        <AddMovie visible={isModalVisible} handleCloseModal={handleCloseModal} />
      )}
    </Container>
  );
};

export default Header;
