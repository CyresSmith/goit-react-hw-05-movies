import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Box from 'components/shared/Box';
import Section from 'components/shared/Section';
import theme from 'theme';

import {
  Card,
  Poster,
  Info,
  Table,
  Vote,
  Votes,
  Description,
  About,
  Text,
} from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [data, setData] = useState({
    poster_path: '',
    title: '',
    vote_average: '',
    vote_count: '',
    popularity: '',
    original_title: '',
    genres: [],
    overview: '',
  });

  useEffect(() => {
    const fetchMovieDetails = async id => {
      const fetchMovieDetails = new MovieApiService({
        reqType: 'getById',
        mediaType: 'movie',
      });

      try {
        const data = await fetchMovieDetails.getReqData(id);
        return data;
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchMovieDetails(movieId)
      .then(data => setData(data))
      .catch(error => console.error(error.message));
  }, [movieId]);

  const genresTxt = genres => {
    if (genres.length > 0) {
      const arr = genres.map(({ name }) => name);

      switch (true) {
        case arr.length > 2:
          return `${arr[0]}, ${arr[1]}, other`;

        case arr.length === 2:
          return `${arr[0]}, ${arr[1]}`;

        case arr.length === 1:
          return `${arr[0]}`;

        default:
          break;
      }
    } else {
      return 'no information';
    }
  };

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = data;

  const posterPath = path => {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
    return '';
  };

  return (
    <Section>
      <Card>
        <Poster src={posterPath(poster_path)}></Poster>
        <Info>
          <Table>
            <caption>{title}</caption>
            <tbody>
              <tr>
                <td className="parameter padding-bottom-td">Vote / Votes:</td>
                <td className="value padding-bottom-td">
                  <Vote>{vote_average}</Vote> /<Votes>{vote_count}</Votes>
                </td>
              </tr>
              <tr>
                <td className="parameter padding-bottom-td">Popularity:</td>
                <td className="value padding-bottom-td">{popularity}</td>
              </tr>
              <tr>
                <td className="parameter padding-bottom-td">Original Title:</td>
                <td className="value padding-bottom-td">{original_title}</td>
              </tr>
              <tr>
                <td className="parameter no-padding-td">Genre:</td>
                <td className="value no-padding-td">{genresTxt(genres)}</td>
              </tr>
            </tbody>
          </Table>
          <Description>
            <About>about</About>
            <Text>{overview}</Text>
          </Description>
        </Info>
      </Card>
    </Section>
  );
};

export default MovieDetails;
