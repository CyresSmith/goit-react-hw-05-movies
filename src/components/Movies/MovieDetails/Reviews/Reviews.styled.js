import styled from 'styled-components';
import theme from 'theme';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[5]};
`;

export const Item = styled.li`
  background-color: ${theme.colors.background};
  padding: ${theme.space[4]};
  border-radius: ${theme.radii.normal};
`;

export const Content = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.body};
  margin-bottom: ${theme.space[4]};
`;

export const Author = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  line-height: ${theme.lineHeights.body};
  margin-right: ${theme.space[4]};
`;

export const Created = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.light};
  line-height: ${theme.lineHeights.body};
`;
