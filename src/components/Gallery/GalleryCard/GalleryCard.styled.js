import styled from '@emotion/styled';
import theme from 'theme';

export const Card = styled.li`
  width: calc(((100% - (${theme.space[5]} * 2)) / 3));
  padding: ${theme.space[3]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.medium};
  transition: ${theme.transition.primary};
  cursor: pointer;

  :hover {
    scale: 1.1;
    box-shadow: ${theme.shadow.high};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  margin-bottom: ${theme.space[4]};
  object-fit: cover;
  border-radius: $border-radius;
`;

export const Info = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.secondary};
  line-height: 1.14;
  text-align: left;
`;

export const Title = styled.span`
  display: block;
  text-transform: uppercase;
  margin-bottom: ${theme.space[2]};
`;

export const Description = styled.span`
  color: $accent-color;
`;
