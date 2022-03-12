import React from 'react';
import Loading from '../components/Loading/Loading';
import Movie from '../components/Movie/Movie';
import MoviesList from '../components/MoviesList/MoviesList';
import MoviesWrapper from '../components/MoviesWrapper/MoviesWrapper';
import Title from '../components/Title/Title';

const MoviesResults = ({ searchText, movies }) => {
  return (
    <MoviesWrapper>
      <Title>
        Search results for:{' '}
        <span className="yellow">
          {searchText} {movies.total && `(${movies.total})`}
        </span>
      </Title>
      {movies.search ? (
        <MoviesList>
          {movies.search.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </MoviesList>
      ) : (
        <Loading />
      )}
    </MoviesWrapper>
  );
};

export default MoviesResults;
