import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { InfinitySpin } from 'react-loader-spinner';
import MovieApiService from 'components/shared/Services/MovieApiService';
import GalleryUl from './Gallery.styled';
import GalleryCard from './GalleryCard';
import theme from 'theme';

const Gallery = ({ movies, loading, setError }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = new MovieApiService({
      reqType: 'genre',
      mediaType: 'movie',
    });

    fetchGenres
      .getReqData()
      .then(result => setGenres(result))
      .catch(result => setError(result.message));
  }, [setError]);

  return (
    <>
      <GalleryUl>
        {movies.map(movieObj => {
          const { id } = movieObj;
          return <GalleryCard key={id} movieObj={movieObj} genres={genres} />;
        })}
      </GalleryUl>
      {loading && <InfinitySpin width="200" color={theme.colors.accent} />}
    </>
  );
};

Gallery.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
  setError: PropTypes.func,
};

export default Gallery;
