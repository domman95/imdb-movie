import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  background-color: var(--yellow);
  cursor: pointer;
  font-size: 1.4rem;
  padding: 1rem 2.5rem;
  border-radius: var(--borderRadius);
  z-index: 2;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  &:active {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0 0);
  }
`;
