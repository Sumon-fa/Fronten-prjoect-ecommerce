import React, { useEffect } from 'react';
import ProductCard from '../components/Ui/ProductCard';
import { useAppDispatch } from '../hooks/reduxHook';
import { useAppSelector } from '../hooks/reduxHook';
import { getAllProducts } from '../redux/actions/productActions';

import Loader from '../components/Ui/Loader';
import { productActions } from '../redux/slices/productSlice';
import { title } from 'process';

const Products = () => {
  const { products, isLoading, isError } = useAppSelector(
    (state) => state.products
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      alert(isError.error + ', ' + isError.statusCode);
      dispatch(productActions.clearError());
    }
    dispatch(getAllProducts());
  }, [isError, dispatch]);

  return (
    <>
      {isLoading && <Loader />}

      {!isError && !isLoading && <ProductCard products={products} />}
    </>
  );
};

export default Products;