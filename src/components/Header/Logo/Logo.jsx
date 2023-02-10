import { LogoLink, LogoBox, LogoText } from './Logo.styled';
import { GiFilmProjector } from 'react-icons/gi';

const Logo = () => {
  return (
    <LogoLink to="/goit-react-hw-05-movies">
      <LogoBox>
        <GiFilmProjector />
        <LogoText>Cinemateque</LogoText>
      </LogoBox>
    </LogoLink>
  );
};

export default Logo;
