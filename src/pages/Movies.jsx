import { useState, useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import SearchForm from 'components/Movies/Form/Form';
import Title from 'components/shared/Title/Title.styled';
import { useSearchParams } from 'react-router-dom';
import Button from 'components/shared/Button';
import { CgMoreO } from 'react-icons/cg';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [loadMoreBtnVisible, setLoadMoreBtnVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const query = searchParams.get('query');
  const page = searchParams.get('page');

  useEffect(() => {
    if (!query) {
      return;
    }

    setLoading(true);

    const fetchSearchedMovies = new MovieApiService({
      reqType: 'search',
      mediaType: 'movie',
    });

    const fetchData = async page => {
      try {
        const { results, total_results, total_pages } =
          await fetchSearchedMovies.getReqData(null, page);

        const data = await fetchSearchedMovies.getReqData(null, page);

        console.log(data);

        if (total_results.length === 0) {
          Report.failure('No movies found!');
        }
        return results;
      } catch (result) {
        setError(result.status_message);
      }
    };

    fetchSearchedMovies.request = query;

    fetchData(page)
      .then(result => {
        if (result.length < 20) {
          setLoadMoreBtnVisible(false);
        }

        if (result.length === 0) {
          setSearchedMovies([]);
          return Report.failure('No movies found!');
        }

        setLoadMoreBtnVisible(true);
        setSearchedMovies(prevState => [...prevState, ...result]);
      })
      .catch(result => setError(result.status_message))
      .finally(() => setLoading(false));
  }, [page, query]);

  const setParams = params => {
    setSearchedMovies([]);
    return setSearchParams({ ...params, page: 1 });
  };

  const loadMore = () => {
    setSearchParams({ query, page: Number(page) + 1 });
  };

  return (
    <Section variant="containerCentered">
      <SearchForm onSubmit={setParams} />
      {!query ? (
        <>
          <Title variant="subTitle">Start search movies</Title>
        </>
      ) : (
        <>
          <Gallery movies={searchedMovies} loading={loading} />
          {loadMoreBtnVisible && (
            <Button endicon={CgMoreO} iconSize={18} onClick={() => loadMore()}>
              Load more
            </Button>
          )}
        </>
      )}
      {error && Report.failure(error)}
    </Section>
  );
};

export default Movies;
