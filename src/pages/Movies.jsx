import { useState, useEffect, useCallback } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import SearchForm from 'components/Movies/Form/Form';
import Title from 'components/shared/Title/Title.styled';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: 0 });
  const [page, setPage] = useState(1);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const query = searchParams.get('query');
  const currentPage = Number(searchParams.get('page'));

  useEffect(() => {
    if (!query) {
      return;
    }

    if (currentPage !== 0) {
      if (currentPage !== page) {
        setPage(currentPage);
      }
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

        setTotalPages(total_pages);

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
        if (result.length === 0) {
          setSearchedMovies([]);
          return Report.failure('No movies found!');
        }
        setSearchedMovies(result);
      })
      .catch(result => setError(result.status_message))
      .finally(() => setLoading(false));
  }, [currentPage, page, query]);

  const setParams = useCallback(
    params => {
      setSearchedMovies([]);
      return setSearchParams({ ...params });
    },
    [setSearchParams]
  );

  const loadMore = useCallback(
    (e, num) => {
      setPage(num);
      setSearchParams({ page: num });
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [setSearchParams]
  );

  return (
    <Section sectionVariant="section" containerVariant="containerCentered">
      <SearchForm onSubmit={setParams} />
      {!query ? (
        <>
          <Title variant="subTitle">Start search movies</Title>
        </>
      ) : (
        <>
          <Gallery
            totalPages={totalPages}
            page={page}
            movies={searchedMovies}
            loading={loading}
            onClick={loadMore}
          />
        </>
      )}
      {error && Report.failure(error)}
    </Section>
  );
};

export default Movies;
