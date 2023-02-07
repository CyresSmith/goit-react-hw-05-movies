import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import List from './Cast.styled';
import CastItem from './CastItem';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';

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
    </Section>
  );
};

export default Cast;
