import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Children } from '../types/children';
import { BackDropProps } from '../types/ui/backDrop';
import { ModalProps } from '../types/ui/modal';

function BackDrop({ onToogle }: BackDropProps) {
  return <div className="backdrop" onClick={onToogle} />;
}

function ModalOverLay({ children }: Children) {
  return (
    <div className="modal">
      <div className="modal__child">{children}</div>
    </div>
  );
}
const portalElement = document.getElementById('overlays') as HTMLElement;

function Modal({ children, onToogle }: ModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onToogle={onToogle} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
