import Box from 'components/shared/Box';
import Title from 'components/shared/Title/Title.styled';
import { PropTypes } from 'prop-types';

const Section = ({
  title,
  titleVariant,
  titleAs,
  children,
  bgColor = 'primary',
  variant,
  minHeight,
}) => {
  return (
    <Box
      variant="section"
      as="section"
      backgroundColor={bgColor}
      minHeight={minHeight}
    >
      <Box variant={variant}>
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
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleVariant: PropTypes.string,
  titleAs: PropTypes.string,
};

export default Section;
