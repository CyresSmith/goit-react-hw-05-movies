import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import { List } from './Reviews.styled';
import Review from './Review';

const Reviews = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      const fetchMovieDetails = new MovieApiService({
        reqType: 'reviews',
        mediaType: 'movie',
      });

      try {
        const data = await fetchMovieDetails.getReqData(id);
        return data.results;
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovieDetails(movieId)
      .then(data => setData(data))
      .catch(error => console.error(error.message));
  }, [movieId]);

  return (
    <Section bgColor="secondary">
      <List>
        {data.map(({ author = '', content = '', id = '', created_at = '' }) => {
          return (
            <Review
              key={id}
              content={content}
              author={author}
              created_at={created_at}
            />
          );
        })}
      </List>
    </Section>
  );
};

export default Reviews;
