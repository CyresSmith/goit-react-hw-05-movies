import { useState, useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import SearchForm from 'components/Movies/Form/Form';
import Title from 'components/shared/Title/Title.styled';
import { Outlet, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    const fetchSearchedMovies = new MovieApiService({
      reqType: 'search',
      mediaType: 'movie',
    });

    const fetchData = async () => {
      try {
        const { results, total_results } =
          await fetchSearchedMovies.getReqData();

        if (total_results.length === 0) {
          Report.failure('No movies found!');
        }
        return results;
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSearchedMovies.request = query;

    fetchData()
      .then(result => setSearchedMovies(result))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <Section>
      <SearchForm onSubmit={setSearchParams} />
      {!query && <Title variant="subTitle">Start search movies</Title>}
      {query && <Gallery movies={searchedMovies} loading={loading} />}
    </Section>
  );
};

export default Movies;
