import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { authActions } from '../../redux/slices/authSlice';
import { TopHeaderProps } from '../types/header/header';

const TopHeader = ({ onToogle }: TopHeaderProps) => {
  const { token } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authActions.logout());

    alert('Want to Logged Out.');
    navigate('/');
  };
  return (
    <nav className="top-header__nav-bar">
      <Link to="#" className="top-header__nav-bar__nav-link">
        {token && token.access_token ? (
          <i
            className="fa-solid fa-right-from-bracket"
            onClick={logoutHandler}
          ></i>
        ) : (
          <i onClick={onToogle} className="fa-solid fa-user"></i>
        )}
      </Link>
      <Link to="/product/cart" className="top-header__nav-bar__nav-link">
        <i className="fa-solid fa-bag-shopping"></i>
        <span className="shopping-cart">
          {' '}
          bag (
          {cartItems && cartItems.length > 0
            ? cartItems.reduce((acc, curV) => acc + curV.amount, 0)
            : 0}
          )
        </span>
      </Link>
      {token && token.access_token && (
        <Link to="/profile" className="top-header__nav-bar__nav-link">
          <i className="fa-solid fa-id-card-clip"></i>
        </Link>
      )}
    </nav>
  );
};

export default TopHeader;
