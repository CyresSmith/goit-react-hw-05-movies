import styled from 'styled-components';
import theme from 'theme';

export const Item = styled.li`
  width: calc((100% - (${theme.space[4]} * 5)) / 6);
  padding: ${theme.space[3]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.medium};
`;

export const Photo = styled.img`
  height: 240px;
  object-fit: cover;
  margin-bottom: ${theme.space[3]};
`;

export const Info = styled.p`
  color: ${theme.colors.secondary};
`;

export const Name = styled.span`
  display: block;
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.space[2]};
`;

export const Character = styled.span`
  font-weight: ${theme.fontWeights.regular};
`;
