import { useState } from 'react';
import MovieApiService from 'components/shared/Services/MovieApiService';
import { Report } from 'notiflix/build/notiflix-report-aio';
import Section from 'components/shared/Section';
import SearchForm from 'components/Movies/Form/Form';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState({});

  return (
    <>
      <Section>
        <SearchForm />
      </Section>
    </>
  );
};

export default Movies;
