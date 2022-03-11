import React from 'react';
import Movie from '../components/Movie/Movie';
import MoviesList from '../components/MoviesList/MoviesList';
import MoviesWrapper from '../components/MoviesWrapper/MoviesWrapper';
import Title from '../components/Title/Title';

const LastRatings = () => {
  return (
    <MoviesWrapper>
      <Title>Ostatnio ocenione</Title>
      <MoviesList>
        <Movie />
        <Movie />
        <Movie />
      </MoviesList>
    </MoviesWrapper>
  );
};

export default LastRatings;
