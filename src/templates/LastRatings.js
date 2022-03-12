import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button/Button';
import Movie from '../components/Movie/Movie';
import MoviesList from '../components/MoviesList/MoviesList';
import MoviesWrapper from '../components/MoviesWrapper/MoviesWrapper';
import Title from '../components/Title/Title';

const LastRatings = () => {
  const { ratedMovies } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch({ type: 'RESET_RATED_MOVIES' });
  };

  return (
    <MoviesWrapper>
      <div className="header">
        <Title>Last Added</Title>
        <Button onClick={handleReset}>RESET</Button>
      </div>
      {ratedMovies ? (
        <MoviesList>
          {ratedMovies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MoviesList>
      ) : null}
    </MoviesWrapper>
  );
};

export default LastRatings;
