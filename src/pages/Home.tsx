import React from 'react';
import Category from '../components/Home/Category';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Background from '../components/Header/Background';
const Home = () => {
  return (
    <>
      <Background />
      <Category />
      <FeaturedProducts />
    </>
  );
};

export default Home;
