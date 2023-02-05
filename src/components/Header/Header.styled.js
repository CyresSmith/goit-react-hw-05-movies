import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    :not(:last-child) {
      margin-right: ${theme.space[4]};
    }

    :first-child {
      margin-right: ${theme.space[6]};
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};

  :hover {
    color: ${theme.colors.accent};
  }
`;
