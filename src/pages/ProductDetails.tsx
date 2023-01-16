import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCart } from '../components/types/cartState';
import { Product } from '../components/types/products/product';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { getSingleProducts } from '../redux/actions/ProductDetailsActions';
import { cartActions } from '../redux/slices/cartSlice';
import { productDetailsAction } from '../redux/slices/ProductDetailsSlice';

const ProductDetails = () => {
  const [chooseProduct, setChoice] = useState(0);
  const params = useParams();
  const { product, isLoading, isError } = useAppSelector(
    (state) => state.product
  );

  const dispatch = useAppDispatch();
  const changeProduct = (index: number) => {
    setChoice(index);
  };

  useEffect(() => {
    if (params.id) {
      dispatch(getSingleProducts(params.id));
    }
  }, [dispatch, params.id]);

  useEffect(() => {
    if (isError) {
      alert(isError.message);
      dispatch(productDetailsAction.clearError());
    }
  }, [isError, alert]);

  const addToCartHandler = (item: Product) => {
    const cartItem: ProductCart = {
      ...item,
      amount: 1,
      updatedPrice: item.price,
    };
    dispatch(cartActions.addToCart(cartItem));
  };

  return (
    <>
      {product && (
        <div className="app">
          <div className="details">
            <div className="big-img">
              <img src={product.images[chooseProduct]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{product.title}</h2>
                <span>${product.price}</span>
              </div>
              <div className="colors">
                <button style={{ backgroundColor: 'red' }}></button>
              </div>
              <p>{product.description}</p>
              <p></p>
              <div className="thumb">
                {product.images.map((item, index) => (
                  <img
                    src={item}
                    alt=""
                    onClick={() => changeProduct(index)}
                    key={index}
                  />
                ))}
              </div>
              <button
                className="cart"
                onClick={() => addToCartHandler(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
