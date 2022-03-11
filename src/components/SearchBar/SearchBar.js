import React, { useState } from 'react';
import { StyledSearchBar } from './SearchBar.styles';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <>
      <StyledSearchBar onSubmit={submitFormHandler}>
        <label htmlFor="search">
          <BsSearch />
        </label>
        <input
          id="search"
          onChange={changeInputHandler}
          type="text"
          value={inputValue}
          placeholder="Type movie title..."
        />
        <button type="submit">Search</button>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;
