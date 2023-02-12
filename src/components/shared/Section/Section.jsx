import Box from 'components/shared/Box';
import Title from 'components/shared/Title/Title.styled';
import { PropTypes } from 'prop-types';
import theme from 'theme';

const Section = ({
  title,
  titleVariant,
  titleAs,
  children,
  bgColor = theme.colors.primary,
  sectionVariant,
  containerVariant,
  minHeight,
  backgroundImage = null,
}) => {
  return (
    <Box
      variant={sectionVariant}
      as="section"
      backgroundColor={bgColor}
      minHeight={minHeight}
      backgroundImage={backgroundImage}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Box variant={containerVariant}>
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
