import React from 'react';
import { useAppSelector } from '../../hooks/reduxHook';

const Header = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      <ul className="cart-container__nav">
        <li>Product</li>
        <li>Shopping Cart</li>
      </ul>

      <span className="cart-container__count">
        {cartItems.reduce((acc, curV) => acc + curV.amount, 0)} items in the bag
      </span>
    </div>
  );
};

export default Header;
