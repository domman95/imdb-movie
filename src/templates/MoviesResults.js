import React from 'react';
import Movie from '../components/Movie/Movie';
import MoviesList from '../components/MoviesList/MoviesList';
import MoviesWrapper from '../components/MoviesWrapper/MoviesWrapper';
import Title from '../components/Title/Title';

const MoviesResults = () => {
  return (
    <MoviesWrapper>
      <Title>Wyniki wyszukiwania dla: (123)</Title>
      <MoviesList>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </MoviesList>
    </MoviesWrapper>
  );
};

export default MoviesResults;
