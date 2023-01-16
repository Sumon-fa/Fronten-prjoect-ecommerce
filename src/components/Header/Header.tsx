import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HeaderProps } from '../types/header/header';
import logo from '../../assets/Shopping-logos_black.png';
import DropDownCategory from './DropDownCategory';
import Background from './Background';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { authActions } from '../../redux/slices/authSlice';
const Header = ({ onClose, onHide }: HeaderProps) => {
  const location = useLocation();
  const { isError, isLoading, token } = useAppSelector((state) => state.auth);
  const { cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(authActions.logout());

    alert('Want to Logged Out.');
    navigate('/');
  };

  return (
    <>
      <div className="top-header">
        <div className="top-header__logo">
          <h1>
            <Link to="/">
              <img src={logo} alt="website logo name  Shopping" />
            </Link>
          </h1>
        </div>
        <nav className="top-header__nav-bar">
          <Link to="#" className="top-header__nav-bar__nav-link">
            {token && token.access_token ? (
              <i
                className="fa-solid fa-right-from-bracket"
                onClick={logoutHandler}
              ></i>
            ) : (
              <i onClick={onClose} className="fa-solid fa-user"></i>
            )}
          </Link>
          <Link to="/product/cart" className="top-header__nav-bar__nav-link">
            <i className="fa-solid fa-bag-shopping"></i>
            <span className="shopping-cart">
              {' '}
              bag ({cartItems.reduce((acc, curV) => acc + curV.amount, 0)})
            </span>
          </Link>
          {token && token.access_token && (
            <Link to="/profile" className="top-header__nav-bar__nav-link">
              <i className="fa-solid fa-id-card-clip"></i>
            </Link>
          )}
        </nav>
      </div>
      <div className="bottom-header">
        <nav className="bottom-header__nav-bar">
          <Link to="/" className="bottom-header__nav-bar__nav-link">
            Home
          </Link>

          <Link to="/products" className="bottom-header__nav-bar__nav-link">
            Products
          </Link>
          <DropDownCategory />
        </nav>
        <div className="bottom-header__search" onClick={onHide}>
          SEARCH <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
