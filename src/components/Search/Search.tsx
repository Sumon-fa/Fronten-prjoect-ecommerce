import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../hooks/reduxHook';
import { getProductsByTitle } from '../../redux/actions/productActions';

import { SearchProps } from '../types/header/search';
import SearchModal from '../Ui/SearchModal';

const Search = ({ onToogleSearch, setSearchToogle }: SearchProps) => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchByTitleHandler = () => {
    dispatch(getProductsByTitle(title));
    navigate(`/search?q=${title}`);
    setSearchToogle(false);
    setTitle('');
  };
  const searchByEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(getProductsByTitle(title));
      navigate(`/search?q=${title}`);
      setSearchToogle(false);
      setTitle('');
    }
  };
  return (
    <SearchModal onToogleSearch={onToogleSearch}>
      <input
        onKeyPress={(e) => searchByEnterKey(e)}
        type="text"
        aria-label="search"
        placeholder="Search products..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <i
        className="fa-solid fa-magnifying-glass"
        onClick={searchByTitleHandler}
      ></i>
    </SearchModal>
  );
};

export default Search;
