import styled from 'styled-components';
import { Card } from 'antd';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

export const StyledCard = styled(Card)`
  width: 300px;
  margin-right: 20px;
  margin-bottom: 20px;

  &:last-child {
    margin-right: 0;
  }
`;
