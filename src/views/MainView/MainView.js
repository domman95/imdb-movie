import React from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import LastRatings from '../../templates/LastRatings';
import MoviesResults from '../../templates/MoviesResults';
import { StyledMainView } from './MainView.styles';

const MainView = () => {
  return (
    <StyledMainView>
      <h1 className="heroText">
        <span className="yellow">IMDb</span> Movies Store
      </h1>
      <SearchBar />
      <MoviesResults />
      <LastRatings />
    </StyledMainView>
  );
};

export default MainView;
