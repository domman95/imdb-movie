import styled from 'styled-components';

export const StyledMovie = styled.li`
  background-color: var(--yellow);
  transition: 0.3s linear;

  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1) 0 0);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-decoration: none;
    color: var(--black);
    padding: 1rem;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2.2rem;
    }

    .title {
      flex: 1;

      .released {
        font-size: 1.2rem;
      }

      h2 {
        font-size: 1.6rem;
      }
    }

    .rating {
      font-size: 1.4rem;
    }
  }
`;
