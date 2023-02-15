import { LogoLink, LogoBox, LogoText } from './Logo.styled';
import { GiFilmProjector } from 'react-icons/gi';

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoBox>
        <GiFilmProjector />
        <LogoText>Cinemateque</LogoText>
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
