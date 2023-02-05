import { useState, useEffect } from 'react';
import { TiArrowUpThick } from 'react-icons/ti';
import Modal from './Modal';
import ScrollUpBtn from './shared/ScrollUpButton/ScrollUpBtn';
import useToggleModal from './shared/hooks/useToggleModal';

import Header from './Header';

const App = () => {
  const { showModal, toggleModal } = useToggleModal();

  return (
    <>
      <Header></Header>
      <ScrollUpBtn
        icon={TiArrowUpThick}
        iconSize={30}
        round={true}
      ></ScrollUpBtn>
      {showModal && (
        <Modal
          onClick={toggleModal}
          showModal={showModal}
          children={''}
        ></Modal>
      )}
    </>
  );
};

export default App;
