import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const Card = styled.div`
  display: flex;
  gap: ${theme.space[5]};
`;

export const Poster = styled.img`
  height: 500px;
  width: 340px;
  padding: ${theme.space[3]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.medium};
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: ${theme.space[5]};
  height: 100%;
`;

export const Info = styled.div`
  width: 100%;
  padding: ${theme.space[4]} ${theme.space[4]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  color: ${theme.colors.secondary};
  box-shadow: ${theme.shadow.medium};
`;

export const Table = styled.table`
  width: 100%;
  margin-bottom: ${theme.space[5]};
  border: 0;
  border-collapse: collapse;
  font-size: ${theme.fontSizes.m};

  caption {
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeights.bold};
    text-align: left;
    margin-bottom: ${theme.space[4]};
  }

  td {
    padding: 0;
  }

  .parameter {
    width: 50%;
    font-weight: ${theme.fontWeights.bold};
  }

  .value {
    font-weight: ${theme.fontWeights.regular};
  }

  .padding-bottom-td {
    padding-bottom: 8px;
  }

  .no-padding-td {
    padding-bottom: 0px;
  }
`;

export const CompanieLogo = styled.img`
  max-height: calc(100% - (${theme.space[4]} * 3) / 4);
  max-width: 50%;
  object-fit: contain;

  :not(:last-of-type) {
    margin-bottom: ${theme.space[4]};
  }
`;

export const Vote = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 16px;
  background-color: ${theme.colors.accent};
  border-radius: ${theme.radii.normal};
`;

export const Votes = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 16px;
  background-color: ${theme.colors.accent};
  border-radius: ${theme.radii.normal};
`;

export const Description = styled.p`
  text-align: left;
  width: 100%;
`;

export const About = styled.span`
  display: block;
  text-transform: uppercase;
  margin-bottom: ${theme.space[4]};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
`;

export const Text = styled.span`
  font-size: ${theme.fontSizes.s};
  line-height: ${theme.lineHeights.body};
  font-weight: ${theme.fontWeights.regular};
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.background};
  padding: ${theme.space[2]} ${theme.space[4]};
  border-radius: ${theme.radii.normal};
  background-color: ${theme.colors.secondary};
  transition: ${theme.transition.primary};
  box-shadow: ${theme.shadow.low};
  margin-top: ${theme.space[4]};

  :not(:last-of-type) {
    margin-right: ${theme.space[4]};
  }

  &.active {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.accent};
    padding: ${theme.space[2]} ${theme.space[4]};
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadow.medium};

    :hover {
      color: ${theme.colors.secondary};
    }
  }

  :hover {
    color: ${theme.colors.accent};
  }
`;
