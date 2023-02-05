import { Nav, Link, CurrentLink } from './Header.styled';
import Logo from './Logo';
import Box from 'components/shared/Box';
import theme from 'theme';

const Header = () => {
  return (
    <Box as="header" pt={[4]} pb={[4]} backgroundColor={theme.colors.secondary}>
      <Box variant="container">
        <Nav>
          <ul>
            <li>
              <Link to="/">
                <Logo />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
          </ul>
        </Nav>
      </Box>
    </Box>
  );
};

export default Header;
