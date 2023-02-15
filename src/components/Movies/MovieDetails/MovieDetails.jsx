import { useParams, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { Report } from 'notiflix';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Box from 'components/shared/Box';
import Section from 'components/shared/Section';
import theme from 'theme';
import Button from 'components/shared/Button';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { MdRateReview } from 'react-icons/md';

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
  CompanieLogo,
  GridBox,
  Link,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [backdrop, setBackdrop] = useState({});
  const navigate = useNavigate();

  const [data, setData] = useState({
    poster_path: '',
    backdrop_path: '',
    title: '',
    vote_average: '',
    vote_count: '',
    popularity: '',
    original_title: '',
    genres: [],
    overview: '',
    production_companies: [],
  });

  useEffect(() => {
    setLoading(true);
    const fetchMovieDetails = async id => {
      const fetchMovieDetails = new MovieApiService({
        reqType: 'movie',
        mediaType: 'movie',
      });

      try {
        const data = await fetchMovieDetails.getReqData(id);
        return data;
      } catch (result) {
        setError(result.status_message);
      }
    };

    const fetchMovieImages = async id => {
      const fetchMovieBackdrop = new MovieApiService({
        reqType: 'images',
        mediaType: 'movie',
      });

      try {
        const data = await fetchMovieBackdrop.getReqData(id);
        return data;
      } catch (result) {
        setError(result.status_message);
      }
    };

    fetchMovieImages(movieId)
      .then(data => {
        if (data.backdrops.length > 1) {
          return setBackdrop(data.backdrops[0]);
        }

        if (data.posters.length > 1) {
          return setBackdrop(data.backdrops[0]);
        }

        return null;
      })
      .catch(result => setError(result.status_message))
      .finally(setLoading(false));

    fetchMovieDetails(movieId)
      .then(data => setData(data))
      .catch(result => setError(result.status_message))
      .finally(setLoading(false));
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
    production_companies,
  } = data;

  const posterPath = path => {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
    return '';
  };

  const backgroundPath = () => {
    if (backdrop.file_path) {
      const { file_path } = backdrop;
      return `
      linear-gradient(to bottom,
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)),
        url(https://image.tmdb.org/t/p/original${file_path})`;
    }
  };

  const goBack = () => navigate(-1);

  return (
    <>
      <Section
        sectionVariant="sectionHero"
        containerVariant="containerCentered"
        backgroundImage={backgroundPath()}
      >
        {error && Report.failure(error)}
        {loading && <InfinitySpin width="200" color={theme.colors.accent} />}
        {!error && (
          <Card>
            <Poster src={posterPath(poster_path)} />
            <Info>
              <Button
                endicon={RiArrowGoBackLine}
                onClick={goBack}
                position={{
                  position: 'absolute',
                  top: theme.space[4],
                  right: theme.space[4],
                }}
              >
                Go back
              </Button>
              <GridBox>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Box>
                    <Table>
                      <caption>{title}</caption>
                      <tbody>
                        <tr>
                          <td className="parameter padding-bottom-td">
                            Vote / Votes:
                          </td>
                          <td className="value padding-bottom-td">
                            <Vote>{vote_average}</Vote> /
                            <Votes>{vote_count}</Votes>
                          </td>
                        </tr>
                        <tr>
                          <td className="parameter padding-bottom-td">
                            Popularity:
                          </td>
                          <td className="value padding-bottom-td">
                            {popularity}
                          </td>
                        </tr>
                        <tr>
                          <td className="parameter padding-bottom-td">
                            Original Title:
                          </td>
                          <td className="value padding-bottom-td">
                            {original_title}
                          </td>
                        </tr>
                        <tr>
                          <td className="parameter no-padding-td">Genre:</td>
                          <td className="value no-padding-td">
                            {genresTxt(genres)}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Description>
                      <About>about</About>
                      <Text>{overview}</Text>
                    </Description>
                  </Box>

                  <Box mt={theme.space[5]}>
                    <Link to="cast" replace={true}>
                      <BsPeopleFill />
                      Cast
                    </Link>
                    <Link to="reviews" replace={true}>
                      <MdRateReview /> Reviews
                    </Link>
                  </Box>
                </Box>

                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="space-around"
                >
                  {production_companies
                    .slice(0, 4)
                    .map(({ logo_path, name }) => {
                      if (logo_path) {
                        return (
                          <CompanieLogo
                            key={name}
                            src={posterPath(logo_path)}
                            alt={name}
                          />
                        );
                      }
                    })}
                </Box>
              </GridBox>
            </Info>
          </Card>
        )}
      </Section>
      <Outlet />
    </>
  );
};

export default MovieDetails;
