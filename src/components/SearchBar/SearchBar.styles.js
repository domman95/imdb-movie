import styled from 'styled-components';

export const StyledSearchBar = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 4rem;
  width: 100%;
  max-width: 60rem;
  padding: 0 2rem;

  label {
    font-size: clamp(1.2rem, 2vw, 2.4rem);
    align-self: center;
    color: var(--yellow);
  }

  input {
    font-size: 1.6rem;
    border-radius: var(--borderRadius);
    border: none;
    padding: 0 1rem;
    flex: 1;
    outline: none;

    &:active,
    &:focus {
      outline: 2px solid var(--yellow);
    }
  }
`;
