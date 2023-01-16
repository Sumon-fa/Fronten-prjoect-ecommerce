import React from 'react';
import Loader from '../components/Ui/Loader';
import ProductCard from '../components/Ui/ProductCard';
import { useAppSelector } from '../hooks/reduxHook';

const SearchPage = () => {
  const { products, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  return (
    <>
      {isLoading && <Loader />}

      {!isError && !isLoading && <ProductCard products={products} />}
    </>
  );
};

export default SearchPage;
