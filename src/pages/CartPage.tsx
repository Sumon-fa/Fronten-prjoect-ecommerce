import React from 'react';
import Header from '../components/Cart/Header';
import ProductCartItems from '../components/Cart/ProductCartItems';
import Summary from '../components/Cart/Summary';
const CartPage = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '3em',
        }}
      >
        <Header />
        <ProductCartItems />
      </div>
      <Summary />
    </>
  );
};

export default CartPage;
