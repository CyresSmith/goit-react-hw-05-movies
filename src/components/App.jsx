import { Routes, Route } from 'react-router-dom';
import { TiArrowUpThick } from 'react-icons/ti';
import Header from '../components/Header';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './Movies/MovieDetails';
import ScrollUpBtn from '../components/shared/ScrollUpButton';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <ScrollUpBtn icon={TiArrowUpThick} iconSize={30} round={true} />
      {/* {showModal && (
        <Modal onClick={toggleModal} showModal={showModal} children={''} />
      )} */}
    </>
  );
};

export default App;
