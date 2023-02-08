import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import ScrollUpBtn from 'components/shared/ScrollUpButton/ScrollUpBtn';
import { TiArrowUpThick } from 'react-icons/ti';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollUpBtn icon={TiArrowUpThick} iconSize={30} round={true} />
    </>
  );
};

export default SharedLayout;
