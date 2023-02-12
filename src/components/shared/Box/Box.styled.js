import styled from '@emotion/styled';
import {
  color,
  typography,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant,
  flex,
} from 'styled-system';
import theme from 'theme';

const Box = styled('div')(
  color,
  typography,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
  variant({
    variants: {
      container: {
        width: theme.sizes.container,
        ml: 'auto',
        mr: 'auto',
        pl: theme.space[5],
        pr: theme.space[5],
      },

      containerCentered: {
        width: theme.sizes.container,
        ml: 'auto',
        mr: 'auto',
        pl: theme.space[5],
        pr: theme.space[5],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },

      section: {
        pt: theme.space[5],
        pb: theme.space[5],
        ml: 'auto',
        mr: 'auto',
      },

      sectionHero: {
        pt: theme.space[7],
        pb: theme.space[7],
        ml: 'auto',
        mr: 'auto',
      },
    },
  })
);

export default Box;
