import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Report } from 'notiflix';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import { List } from './Reviews.styled';
import Review from './Review';
import Title from 'components/shared/Title/Title.styled';
import theme from 'theme';

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
        Report.failure(error.message);
      }
    };

    fetchMovieDetails(movieId)
      .then(data => setData(data))
      .catch(error => Report.failure(error.message));
  }, [movieId]);

  return (
    <Section
      sectionVariant="section"
      containerVariant="containerCentered"
      bgColor={theme.colors.secondary}
      minHeight="220px"
    >
      {data.length > 0 ? (
        <List>
          {data.map(
            ({ author = '', content = '', id = '', created_at = '' }) => {
              const date = new Date(created_at);
              return (
                <Review
                  key={id}
                  content={content}
                  author={author}
                  created_at={date.toLocaleString()}
                />
              );
            }
          )}
        </List>
      ) : (
        <Title variant="subTitleAccent">No reviews found</Title>
      )}
    </Section>
  );
};

export default Reviews;
