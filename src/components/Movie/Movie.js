import React from 'react';
import { StyledMovie } from './Movie.styles.js';
import { BiMoviePlay } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Movie = () => {
  return (
    <StyledMovie>
      <Link to="/123">
        <div className="icon">
          <BiMoviePlay />
        </div>
        <div className="title">
          <p className="released">18-04-2019</p>
          <h2>Harry Potter i Komnata Tajemnic</h2>
        </div>
        <p className="rating">8.832</p>
      </Link>
    </StyledMovie>
  );
};

export default Movie;
