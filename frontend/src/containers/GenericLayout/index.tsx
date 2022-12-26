import Loader from 'components/Loader';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ConexaHeader from 'components/ConexaHeader';
import Modal from 'components/GenericModal';
import * as S from './index.style';

export interface GenericLayoutContext {
  handlerModal: (content: React.ReactElement, flag: boolean) => void;
  handlerLoader: (flag: boolean) => void;
}

const GenericLayout = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactElement>();

  const handlerModal = (content: React.ReactElement, flag: boolean) => {
    setShowModal(flag);
    setModalContent(content);
  };
  const handlerLoader = (flag: boolean) => {
    setShowLoader(flag);
  };

  return (
    <S.GenericLayoutWrapper>
      <ConexaHeader />
      <Outlet
        context={{
          handlerModal,
          handlerLoader,
        }}
      />
      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        {modalContent}
      </Modal>
      {showLoader && <Loader />}
    </S.GenericLayoutWrapper>
  );
};

export default GenericLayout;
