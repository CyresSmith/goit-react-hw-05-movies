import { Item, Photo, Info, Name, Character } from './CastItem.styled';

const CastItem = ({ path, character, name }) => {
  const posterPath = path => {
    if (path) {
      return `https://image.tmdb.org/t/p/w500${path}`;
    }
    return '';
  };

  return (
    <Item>
      <Photo src={posterPath(path)} />
      <Info>
        <Name>{name}</Name>{' '}
        {character && <Character> as {character}</Character>}
      </Info>
    </Item>
  );
};

export default CastItem;
