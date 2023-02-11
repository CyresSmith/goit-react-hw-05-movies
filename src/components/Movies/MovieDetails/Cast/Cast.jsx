import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Report } from 'notiflix';
import List from './Cast.styled';
import CastItem from './CastItem';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Title from 'components/shared/Title/Title.styled';
import theme from 'theme';

const Cast = () => {
  const { movieId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async id => {
      const fetchMovieDetails = new MovieApiService({
        reqType: 'credits',
        mediaType: 'movie',
      });

      try {
        const data = await fetchMovieDetails.getReqData(id);
        return data.cast;
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
      variant="containerCentered"
      bgColor={theme.colors.secondary}
      minHeight="220px"
    >
      {data.length > 0 ? (
        <List>
          {data.map(
            ({ profile_path = '', character = '', name = '', id = '' }) => {
              return (
                <CastItem
                  key={id}
                  path={profile_path}
                  character={character}
                  name={name}
                />
              );
            }
          )}
        </List>
      ) : (
        <Title variant="subTitleAccent">No actors found</Title>
      )}
    </Section>
  );
};

export default Cast;
