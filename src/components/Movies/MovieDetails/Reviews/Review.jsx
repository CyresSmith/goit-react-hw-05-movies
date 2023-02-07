import Box from 'components/shared/Box';
import moment from 'moment';
import { Item, Author, Content, Created } from './Reviews.styled';

const Review = ({ content, author, created_at }) => {
  return (
    <Item>
      <Content>{content}</Content>
      <Box display="flex" alignItems="center">
        <Author>{author}</Author>
        <Created>{created_at}</Created>
      </Box>
    </Item>
  );
};

export default Review;
