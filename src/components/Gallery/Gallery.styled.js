import styled from 'styled-components';
import theme from 'theme';

const GalleryUl = styled.ul`
  gap: ${theme.space[5]};
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.space[5]};
`;
export default GalleryUl;
