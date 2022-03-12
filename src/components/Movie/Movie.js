import React from 'react';
import { StyledMovie } from './Movie.styles.js';
import { BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { calculateScore } from '../../utils/calculateStore.js';

const Movie = ({ movie }) => {
  return (
    <StyledMovie>
      <Link to={`/${movie.id}`}>
        <div className="icon">
          <BiMoviePlay />
        </div>
        <div className="title">
          <p className="released">{movie.year}</p>
          <h2>{movie.title}</h2>
        </div>
        <p className="rating">
          {movie.star
            ? calculateScore(movie.star)
            : calculateScore(movie.score)}
        </p>
      </Link>
    </StyledMovie>
  );
};

export default Movie;
