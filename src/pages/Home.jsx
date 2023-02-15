import { useState, useEffect, useCallback } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const currentPage = Number(searchParams.get('page'));

  useEffect(() => {
    setLoading(true);

    if (currentPage !== 0) {
      if (currentPage !== page) {
        setPage(currentPage);
      }
    }

    const fetchTrending = new MovieApiService({
      reqType: 'trending',
      mediaType: 'movie',
      timeWindow: 'week',
    });

    const fetchData = async page => {
      try {
        const { results, total_results, total_pages } =
          await fetchTrending.getReqData(null, page);

        if (total_pages > 1) {
          setTotalPages(total_pages);
        }

        if (total_results.length === 0) {
          Report.failure('No movies found!');
        }
        return results;
      } catch (result) {
        setError(result.status_message);
      }
    };

    fetchData(page)
      .then(result => setTrending(result))
      .catch(result => setError(result.status_message))
      .finally(() => setLoading(false));
  }, [currentPage, page]);

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
    <>
      <Section
        title="Most trending films of the week"
        titleVariant="mainTitle"
        sectionVariant="section"
        containerVariant="containerCentered"
      >
        {!error && (
          <Gallery
            totalPages={totalPages}
            page={page}
            movies={trending}
            loading={loading}
            onClick={loadMore}
          />
        )}
        {error && Report.failure(error)}
      </Section>
    </>
  );
};

export default Home;
