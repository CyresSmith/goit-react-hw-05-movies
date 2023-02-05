import { useState, useEffect } from 'react';
import MovieApiService from 'components/shared/Services/MovieApiService';
import GalleryUl from './Gallery.styled';
import GalleryCard from './GalleryCard';

const Gallery = ({ trending, loading }) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = new MovieApiService({
      reqType: 'genre',
      mediaType: 'movie',
    });

    fetchGenres
      .getReqData()
      .then(result => setGenres(result))
      .catch(error => console.error(error.message));
  }, []);

  return (
    <GalleryUl>
      {trending.map(movieObj => {
        const { id } = movieObj;
        return <GalleryCard key={id} movieObj={movieObj} genres={genres} />;
      })}
    </GalleryUl>
  );
};

export default Gallery;
