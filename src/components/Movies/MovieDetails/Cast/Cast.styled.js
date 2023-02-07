import styled from 'styled-components';
import theme from 'theme';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[4]};
`;

export default List;
