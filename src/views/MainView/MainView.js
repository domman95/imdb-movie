import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import LastRatings from '../../templates/LastRatings';
import MoviesResults from '../../templates/MoviesResults';
import { StyledMainView } from './MainView.styles';

const MainView = () => {
  const { movies, keyword } = useSelector((state) => state);

  const IsSearched = () => {
    if (keyword.trim().length > 0) {
      return (
        <>
          <MoviesResults searchText={keyword} movies={movies} />
          <LastRatings />
        </>
      );
    } else {
      return (
        <p className="tip">Type movie title and press enter to get a result!</p>
      );
    }
  };

  return (
    <StyledMainView>
      <Link to="/" className="link">
        <h1 className="heroText">
          <span className="yellow">IMDb</span> Movies Store
        </h1>
      </Link>
      <SearchBar />
      <IsSearched />
    </StyledMainView>
  );
};

export default MainView;
