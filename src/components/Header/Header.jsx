import { Nav, Link } from './Header.styled';
import Logo from './Logo';
import Box from 'components/shared/Box';
import theme from 'theme';

import { FaHome } from 'react-icons/fa';
import { RiMovie2Fill } from 'react-icons/ri';

const Header = () => {
  return (
    <Box as="header" pt={[4]} pb={[4]} backgroundColor={theme.colors.secondary}>
      <Box variant="container">
        <Nav>
          <ul>
            <li>
              <Logo />
            </li>
            <li>
              <Link to="/goit-react-hw-05-movies">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/goit-react-hw-05-movies/movies">
                <RiMovie2Fill />
                Movies
              </Link>
            </li>
          </ul>
        </Nav>
      </Box>
    </Box>
  );
};

export default Header;
