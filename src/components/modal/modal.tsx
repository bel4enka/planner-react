import React, {FC, useEffect, useState} from 'react';
import styles from './modal.module.css'
import ReactDOM, {createPortal} from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import CloseIcon from '@mui/icons-material/Close';

type TModalProps = {
  readonly onClose: (a:boolean) => void;
  readonly title?: string;
  readonly children: React.ReactNode;
}
const Modal = ( { ...props }:TModalProps ) => {
  const {title, children, onClose} = props
  const node = document.getElementById('react-modals')!

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);
  return createPortal(
    <>
      <ModalOverlay onClose={props.onClose} />
      <div className={styles.modal}>
        <div >
          <div className={`${styles.modal__header} text text_type_main-large mb-4`}>
              <span>{title}</span>
            <span onClick={() => {onClose(false)}} className={styles.modal__close}>
              <CloseIcon />
            </span>
          </div>
          <div className={styles.modal__content}>
            {children &&
              children
            }

          </div>
        </div>
      </div>
    </>,
      node
    );
}

export default Modal
