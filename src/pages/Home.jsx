import { useState, useEffect } from 'react';

import useToggleModal from '../components/shared/hooks/useToggleModal';

import Modal from '../components/Modal';
import Section from 'components/shared/Section';
import Gallery from 'components/Gallery';
import MovieApiService from 'components/shared/Services/MovieApiService';
import { Report } from 'notiflix/build/notiflix-report-aio';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { showModal, toggleModal } = useToggleModal();

  useEffect(() => {
    setLoading(true);

    const fetchTrending = new MovieApiService({
      reqType: 'trending',
      mediaType: 'movie',
      timeWindow: 'week',
    });

    const fetchData = async () => {
      try {
        const { results, total_results } = await fetchTrending.getReqData();

        if (total_results.length === 0) {
          Report.failure('No movies found!');
        }
        return results;
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData()
      .then(result => setTrending(result))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Section>
        <Gallery trending={trending} loading={loading} />
      </Section>
    </>
  );
};

export default Home;
