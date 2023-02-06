import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const LogoLink = styled(NavLink)`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.accent};
`;

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  svg {
    height: 60px;
    width: 60px;
  }
`;

export const LogoText = styled.span`
  margin-top: ${theme.space[3]};
`;
