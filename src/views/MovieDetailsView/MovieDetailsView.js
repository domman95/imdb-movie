import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { StyledMovieDetails } from './MovieDetailsView.styles';
import Loading from '../../components/Loading/Loading';
import { calculateScore } from '../../utils/calculateStore';
import { BiMoviePlay } from 'react-icons/bi';
import Title from '../../components/Title/Title';
import StarRatings from 'react-star-ratings';

const MovieDetailsView = () => {
  const [movie, setMovie] = useState(null);
  const [star, setStar] = useState(0);
  const { ratedMovies } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { movieId } = useParams();

  useEffect(() => {
    if (ratedMovies.length > 0) {
      const match = ratedMovies.find((item) => item.id === movieId);
      if (match) {
        setStar(match.star);
      }
    }

    if (movieId !== 'null') {
      fetch('/.netlify/functions/get-movie-details', {
        method: 'POST',
        body: movieId,
      })
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    }
  }, [movieId]);

  const handleChangeRating = (rating) => {
    setStar(rating);

    dispatch({
      type: 'SET_RATED_MOVIES',
      payload: { ...movie, star: rating },
    });
  };

  return (
    <StyledMovieDetails>
      {movie ? (
        <article className="container">
          <div className="poster">
            <img
              src={
                movie.image ||
                'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg'
              }
              alt={movie.title}
            />
          </div>
          <div className="content">
            <div className="header">
              <p className="date">{movie.release_year}</p>
              <p className="ratings">
                Ratings: {calculateScore(movie.rating || movie.star)}
              </p>
            </div>
            <div className="title">
              <BiMoviePlay />
              <h1>{movie.title}</h1>
            </div>
            <p className="description">{movie.description}</p>
            <div className="ratingStars">
              <StarRatings
                rating={star}
                starRatedColor="#F1D302"
                changeRating={handleChangeRating}
                numberOfStars={10}
                starDimension="20px"
                starSpacing="2px"
                name="rating"
              />
            </div>
          </div>
          <div className="actors">
            <Title>Cast</Title>
            {movie.actors ? (
              <ul>
                {movie.actors.map((actor) => (
                  <li key={actor.id}>
                    <p className="name">{actor.name}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="announcement">
                There are no data to display, sorry :(
              </p>
            )}
          </div>
        </article>
      ) : (
        <Loading />
      )}
    </StyledMovieDetails>
  );
};

export default MovieDetailsView;
