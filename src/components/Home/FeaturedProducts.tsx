import React, { useEffect } from 'react';
import ProductCard from '../Ui/ProductCard';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getAllProducts } from '../../redux/actions/productActions';
import Loader from '../Ui/Loader';

const FeaturedProducts = () => {
  const { products, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      {!isError && !isLoading && (
        <ProductCard
          heading="Featured Products"
          products={products.slice(0, 4)}
        />
      )}
    </>
  );
};

export default FeaturedProducts;
