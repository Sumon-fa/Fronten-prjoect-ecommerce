import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Ui/Loader';
import ProductCard from '../components/Ui/ProductCard';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { getProductsByCategoryId } from '../redux/actions/productActions';
import { productActions } from '../redux/slices/productSlice';

const CategorizedProducts = () => {
  const { products, isLoading, isError } = useAppSelector(
    (state) => state.products
  );
  const params = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isError) {
      alert(isError.message);
      dispatch(productActions.clearError());
    }
  }, [isError, alert]);
  useEffect(() => {
    if (params.id) {
      dispatch(getProductsByCategoryId(params.id));
    }
  }, [params.id]);

  return (
    <>
      {isLoading && <Loader />}

      {!isError && !isLoading && <ProductCard products={products} />}
    </>
  );
};

export default CategorizedProducts;
