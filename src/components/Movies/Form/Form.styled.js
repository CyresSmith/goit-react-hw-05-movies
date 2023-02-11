import styled from '@emotion/styled';
import theme from 'theme';

export const Form = styled.form`
  position: relative;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${theme.space[6]};

  button {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: ${theme.space[2]} ${theme.space[4]};
  font-size: ${theme.fontSizes.m};
  font-family: ${theme.fonts.body};
  border: 0;
  border-radius: ${theme.radii.high};
`;
