import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledSearchBar } from './SearchBar.styles';
import { BsSearch } from 'react-icons/bs';
import Button from '../Button/Button';

const SearchBar = () => {
  const { keyword } = useSelector((state) => state);
  const [inputValue, setInputValue] = useState(keyword);
  const [errorFormMessage, setErrorFormMessage] = useState(false);
  const dispatch = useDispatch();

  const changeInputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      //TODO: alert when true
      setErrorFormMessage(true);
      return;
    }

    fetch('/.netlify/functions/get-movies-by-title', {
      method: 'POST',
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'SET_MOVIES', payload: data });
      })
      .catch((err) => console.log(err));
    dispatch({ type: 'SET_SEARCH_KEYWORD', payload: inputValue });
  };

  return (
    <>
      {errorFormMessage && (
        <p className="errorMessage">
          Error: The input value has to contain some text
        </p>
      )}
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
        <Button type="submit">Search</Button>
      </StyledSearchBar>
    </>
  );
};

export default SearchBar;
