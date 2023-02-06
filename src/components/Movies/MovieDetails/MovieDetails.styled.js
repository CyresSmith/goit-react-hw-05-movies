import styled from 'styled-components';
import theme from 'theme';

export const Card = styled.div`
  display: flex;
  gap: ${theme.space[5]};
`;

export const Poster = styled.img`
  height: 500px;
  width: auto;
  padding: ${theme.space[3]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.medium};
`;

export const Info = styled.div`
  width: 500px;
  padding: ${theme.space[3]} ${theme.space[4]};
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
    width: 150px;
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
