import { createStore } from 'redux';

const INITIAL_STATE = { movies: [], keyword: '', ratedMovies: [] };

const reducer = (state = INITIAL_STATE, action) => {
  // TODO: SWITCH STATEMENT
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
      };
    case 'SET_SEARCH_KEYWORD':
      return {
        ...state,
        keyword: action.payload,
      };
    case 'SET_RATED_MOVIES':
      const filter = state.ratedMovies.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        ratedMovies: [...filter, action.payload],
      };
    case 'RESET_RATED_MOVIES':
      return {
        ...state,
        ratedMovies: [],
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
