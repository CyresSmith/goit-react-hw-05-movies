import styled from '@emotion/styled';
import theme from 'theme';

export const StyledButton = styled('button')`
  display: inline-flex;
  position: ${({ position }) => position.position};
  top: ${({ position }) => position.top};
  right: ${({ position }) => position.right};
  align-items: center;
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  margin-top: ${p => p.mt && theme.space[p.mt]};
  margin-bottom: ${p => p.mb && theme.space[p.mb]};
  padding: ${theme.space[2]};
  color: ${theme.colors.secondary};
  background-color: ${p =>
    p.disabled ? theme.colors.muted : theme.colors.accent};
  cursor: pointer;
  border: ${theme.borders.none};
  border-radius: ${theme.radii.normal};
  box-shadow: ${theme.shadow.low};
  transition: ${theme.transition.primary};

  :disabled {
    pointer-events: none;
  }

  :hover:not(:disabled) {
    background-color: ${theme.colors.accent};
    box-shadow: ${theme.shadow.medium};
    scale: 1.03;
  }
`;

export const ButtonText = styled.span`
  margin-left: ${p => (p.isIconThere ? theme.space[3] : theme.space[0])};
  margin-right: ${p => (p.isIconThere ? theme.space[3] : theme.space[0])};
`;
