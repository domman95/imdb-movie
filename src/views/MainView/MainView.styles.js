import styled from 'styled-components';

export const StyledMainView = styled.main`
  margin: 0 auto;
  max-width: 130rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .heroText {
    font-size: clamp(3.2rem, 5vw, 6.4rem);

    .yellow {
      color: var(--yellow);
    }
  }
`;
