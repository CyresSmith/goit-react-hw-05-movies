import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Spinner = lazy(() => import('./shared/Spinner'));
const SharedLayout = lazy(() => import('./SharedLayout'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails'));
const Cast = lazy(() => import('./Movies/MovieDetails/Cast'));
const Reviews = lazy(() => import('./Movies/MovieDetails/Reviews/Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
