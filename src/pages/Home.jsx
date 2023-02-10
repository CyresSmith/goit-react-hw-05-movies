import { useState, useEffect } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import MovieApiService from 'components/shared/Services/MovieApiService';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import Button from 'components/shared/Button';
import { CgMoreO } from 'react-icons/cg';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    const fetchTrending = new MovieApiService({
      reqType: 'trending',
      mediaType: 'movie',
      timeWindow: 'week',
    });

    const fetchData = async page => {
      try {
        const { results, total_results } = await fetchTrending.getReqData(
          null,
          page
        );

        if (total_results.length === 0) {
          Report.failure('No movies found!');
        }
        return results;
      } catch (result) {
        setError(result.status_message);
      }
    };

    fetchData(page)
      .then(result =>
        setTrending(prevState => {
          return [...prevState, ...result];
        })
      )
      .catch(result => setError(result.status_message))
      .finally(() => setLoading(false));
  }, [page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <Section
        title="Most trending films of the week"
        titleVariant="mainTitle"
        variant="containerCentered"
      >
        {!error && <Gallery movies={trending} loading={loading} />}
        <Button endicon={CgMoreO} iconSize={18} onClick={() => loadMore()}>
          Load more
        </Button>
        {error && Report.failure(error)}
      </Section>
    </>
  );
};

export default Home;
