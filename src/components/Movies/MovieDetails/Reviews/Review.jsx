import Box from 'components/shared/Box';
import { PropTypes } from 'prop-types';
import { Item, Author, Content, Created } from './Reviews.styled';

const Review = ({ content, author, created_at }) => {
  return (
    <Item>
      <Content>{content}</Content>
      <Box display="flex" alignItems="center" justifyContent="flex-end">
        <Author>{author}</Author>
        <Created>{created_at}</Created>
      </Box>
    </Item>
  );
};

Review.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
  created_at: PropTypes.string,
};

export default Review;
