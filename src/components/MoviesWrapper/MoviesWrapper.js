import React from 'react';
import { StyledMoviesWrapper } from './MoviesWrapper.styles';

const MoviesWrapper = ({ children }) => {
  return <StyledMoviesWrapper>{children}</StyledMoviesWrapper>;
};

export default MoviesWrapper;
