import React, { useState } from 'react';

import { ProductsProps } from '../types/products/product';
import ReactPaginate from 'react-paginate';
import { Link, useLocation } from 'react-router-dom';

const ProductCard = ({ heading, products }: ProductsProps) => {
  const location = useLocation();

  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 12;
  const pageVisited = pageNumber * productPerPage;
  const displayProducts = products
    .slice(pageVisited, pageVisited + productPerPage)
    .map((product) => (
      <Link to={`/product/${product.id}`} key={product.id}>
        <div className="feature-product__item">
          <img src={product.images[0]} alt="" />
          <div className="feature-product__item__label">
            <h4 className="feature-product__item__label__heading">
              {product.title}
            </h4>
            <span>${product.price}</span>
          </div>
        </div>
      </Link>
    ));
  const pageCount = Math.ceil(products.length / productPerPage);
  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };
  return (
    <section className="feature">
      <h1>{heading}</h1>
      {location.pathname === '/' ? (
        <div className="feature-product">{displayProducts}</div>
      ) : (
        <>
          <div className="feature-product">{displayProducts}</div>
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </>
      )}
    </section>
  );
};

export default ProductCard;
