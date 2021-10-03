import { EyeOutlined, DeleteOutlined } from '@ant-design/icons/lib/icons';
import { Avatar, Empty } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';

import MovieImage from '../../images/movie-image.jpg';
import { Routes } from '../../constants';
import { Container, StyledCard } from './StyledMovies';
import useMovies from './useMovies';

const Movies: React.FC = () => {
  const { visibleMovies, makeHandleDeleteMovie } = useMovies();
  return (
    <Container>
      {visibleMovies.length ? (
        visibleMovies.map(({ id, title }) => {
          return (
            <StyledCard
              key={id}
              actions={[
                <DeleteOutlined key="delete" onClick={makeHandleDeleteMovie(id)} />,
                <Link to={`${Routes.Movie}/${id}`}>
                  <EyeOutlined key="ellipsis" />
                </Link>,
              ]}
            >
              <Meta avatar={<Avatar src={MovieImage} />} title={title} />
              <img style={{ width: 150 }} src={MovieImage} alt="" />
            </StyledCard>
          );
        })
      ) : (
        <Empty description="Do not find movie" />
      )}
    </Container>
  );
};

export default Movies;
