import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Children } from '../types/children';
import { BackProps, SearchModalProps } from '../types/header/search';

function BackDrop({ onHide }: BackProps) {
  return <div className="search-backdrop" onClick={onHide} />;
}

function ModalOverLay({ children }: Children) {
  return (
    <div className="search-modal">
      <div className="search-modal__child">{children}</div>
    </div>
  );
}
const portalElement = document.getElementById('searchlayer') as HTMLElement;

function SearchModal({ children, onHide }: SearchModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop onHide={onHide} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default SearchModal;
