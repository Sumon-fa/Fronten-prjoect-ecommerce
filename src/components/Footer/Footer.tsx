import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__column">
        <ul className="footer__column__list">
          <li className="footer__column__list__list-heading">SHOP</li>
          <li className="footer__column__list__list-item">
            <Link to="">Clothes</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Furnitures</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Shoes</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Accessories</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <ul className="footer__column__list">
          <li className="footer__column__list__list-heading">INFORMATION</li>
          <li className="footer__column__list__list-item">
            <Link to="">About Us</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Blog</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Contact Us</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Documentation</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <ul className="footer__column__list">
          <li className="footer__column__list__list-heading">ORDER</li>
          <li className="footer__column__list__list-item">
            <Link to="">My Account</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">View Bag</Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">Privacy</Link>
          </li>
        </ul>
      </div>
      <div className="footer__column">
        <ul className="footer__column__list">
          <li className="footer__column__list__list-heading">FOLLOW US</li>
          <li className="footer__column__list__list-item">
            <Link to="">
              <i className="fa-brands fa-facebook"></i> Facebook
            </Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">
              <i className="fa-brands fa-twitter"></i> Twitter
            </Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">
              <i className="fa-brands fa-instagram"></i> Instragram
            </Link>
          </li>
          <li className="footer__column__list__list-item">
            <Link to="">
              <i className="fa-brands fa-youtube"></i> Youtube
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
