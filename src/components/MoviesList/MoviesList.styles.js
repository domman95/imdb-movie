import styled from 'styled-components';

export const StyledMoviesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;
