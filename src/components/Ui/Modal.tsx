import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Children } from '../types/children';
import { BackDropProps } from '../types/ui/backDrop';
import { ModalProps } from '../types/ui/modal';

function BackDrop({ onClose }: BackDropProps) {
  return <div className="backdrop" onClick={onClose} />;
}

function ModalOverLay({ children }: Children) {
  return (
    <div className="modal">
      <div className="modal__child">{children}</div>
    </div>
  );
}
const portalElement = document.getElementById('overlays') as HTMLElement;

function Modal({ children, onClose }: ModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
