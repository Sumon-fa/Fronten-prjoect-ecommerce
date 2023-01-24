import React from 'react';
import { Link } from 'react-router-dom';

const BottomHeader = () => {
  return (
    <>
      <Link to="/" className="bottom-header__nav-bar__nav-link">
        Home
      </Link>

      <Link to="/products" className="bottom-header__nav-bar__nav-link">
        Products
      </Link>
    </>
  );
};

export default BottomHeader;
