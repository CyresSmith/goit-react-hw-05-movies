import SpinnerBox from './Spinner.styled';
import { InfinitySpin } from 'react-loader-spinner';
import theme from 'theme';

const Spinner = () => {
  return (
    <SpinnerBox>
      <InfinitySpin width="200" color={theme.colors.accent} />
    </SpinnerBox>
  );
};

export default Spinner;
