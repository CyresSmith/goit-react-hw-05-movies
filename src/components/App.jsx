import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './Movies/MovieDetails';
import Cast from './Movies/MovieDetails/Cast';
import Reviews from './Movies/MovieDetails/Reviews/Reviews';
import NotFound from 'pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movies" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route
          path="/goit-react-hw-05-movies/movies/:movieId"
          element={<MovieDetails />}
        >
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
