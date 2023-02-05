import { LogoBox, LogoText } from './Logo.styled';
import { GiFilmProjector } from 'react-icons/gi';

const Logo = () => {
  return (
    <LogoBox>
      <GiFilmProjector />
      <LogoText>Cinemateque</LogoText>
    </LogoBox>
  );
};

export default Logo;
