import Box from 'components/shared/Box';
import Title from 'components/shared/Title/Title.styled';
import { PropTypes } from 'prop-types';

const Section = ({ title, titleVariant, titleAs, children }) => {
  return (
    <Box
      variant="section"
      as="section"
      backgroundColor="primary"
      minHeight={850}
    >
      <Box variant="container">
        {title && (
          <Title variant={titleVariant} as={titleAs}>
            {title}
          </Title>
        )}
        {children}
      </Box>
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
  titleVariant: PropTypes.string,
  titleAs: PropTypes.string,
};

export default Section;
