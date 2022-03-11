import React from 'react';
import { StyledMoviesList } from './MoviesList.styles';

const MoviesList = ({ children }) => {
  return <StyledMoviesList>{children}</StyledMoviesList>;
};

export default MoviesList;
