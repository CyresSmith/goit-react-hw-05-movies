import styled from 'styled-components';
import theme from 'theme';

export const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.colors.secondary};
  svg {
    height: 60px;
    width: 60px;
  }
`;

export const LogoText = styled.span`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.secondary};
  margin-top: ${theme.space[3]};
`;
