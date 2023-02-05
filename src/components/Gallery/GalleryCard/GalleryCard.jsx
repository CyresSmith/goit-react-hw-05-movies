import { Card, Description, Image, Info, Title } from './GalleryCard.styled';

const GalleryCard = ({ movieObj, genres }) => {
  const {
    poster_path,
    title = '',
    id,
    genre_ids,
    release_date = '    ',
  } = movieObj;

  const cardGenres = (genre_ids, genresArr) => {
    let cardGenresArr = [];

    if (genre_ids.length === 0) {
      return 'no iformation';
    }

    genre_ids.map(genre_id =>
      genresArr.map(genre => {
        if (genre.id === genre_id) {
          cardGenresArr.push(genre.name);
        }
      })
    );

    switch (true) {
      case cardGenresArr.length > 2:
        return `${cardGenresArr[0]}, ${cardGenresArr[1]}, other`;

      case cardGenresArr.length === 2:
        return `${cardGenresArr[0]}, ${cardGenresArr[1]}`;

      case cardGenresArr.length === 1:
        return `${cardGenresArr[0]}`;

      default:
        break;
    }
  };

  const titleSlice = title => {
    if (title.length > 30) {
      const titleSliced = title.slice(0, 30) + '...';
      return titleSliced;
    } else {
      return title;
    }
  };

  const { genres: genresArr } = genres;

  const posterPath = posterPath => {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return (
    <Card>
      <Image src={posterPath(poster_path)} alt="movie poster" />
      <Info>
        <Title>{titleSlice(title)}</Title>
        <Description>
          {cardGenres(genre_ids, genresArr)} | {release_date.slice(0, 4)}
        </Description>
      </Info>
    </Card>
  );
};

export default GalleryCard;
