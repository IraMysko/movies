import styled from 'styled-components';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 25px 0;
`;

export const StyledLink = styled(Link)`
  font-size: 30px;
  line-height: 1;
  font-weight: bold;
`;

export const StyledInput = styled(Input)`
  width: 200px;
  margin-left: 20px;
`;
