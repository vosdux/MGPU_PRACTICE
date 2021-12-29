import React, { FC } from 'react';
import Modal from 'react-modal';

import './styles.css';

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  modalMode?: 'success';
}

const ModalLayout: FC<Props> = ({ closeModal, modalIsOpen, modalMode, children }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        contentLabel="Error modal"
        overlayClassName="overlay"
      >
        {modalMode ? (<p className="modal-text">Вы прошли тест!</p>) : (
          <>
            <p className="modal-text">Неверно!</p>
            <p className="modal-text">Попробуйте еще раз</p>
            <div className="modal-footer">
              <button onClick={closeModal} className="button" style={{ width: 100 }}>Закрыть</button>
            </div>
          </>
        )}
      </Modal>
      {children}
    </>
  );
};

export default ModalLayout;
