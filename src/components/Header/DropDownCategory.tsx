import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { getCategories } from '../../redux/actions/categoryAction';

const DropDownCategory = () => {
  const category = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <div className="dropdown">
      <span className="dropcategory">Category</span>
      <div className="dropdown-content">
        {category.map((cate) => (
          <Link to={`/category/${cate.id}/products`} key={cate.id}>
            {cate.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDownCategory;
