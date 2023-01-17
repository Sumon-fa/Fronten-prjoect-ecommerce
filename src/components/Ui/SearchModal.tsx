import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Children } from '../types/children';
import { BackProps, SearchModalProps } from '../types/header/search';

function BackDrop({ onToogleSearch }: BackProps) {
  return <div className="search-backdrop" onClick={onToogleSearch} />;
}

function ModalOverLay({ children }: Children) {
  return (
    <div className="search-modal">
      <div className="search-modal__child">{children}</div>
    </div>
  );
}
const portalElement = document.getElementById('searchlayer') as HTMLElement;

function SearchModal({ children, onToogleSearch }: SearchModalProps) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onToogleSearch={onToogleSearch} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverLay>{children}</ModalOverLay>,
        portalElement
      )}
    </Fragment>
  );
}

export default SearchModal;
