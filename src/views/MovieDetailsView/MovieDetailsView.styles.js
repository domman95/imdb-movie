import styled from 'styled-components';

export const StyledMovieDetails = styled.section`
  max-width: 130rem;
  margin: 0 auto;

  .container {
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(2, auto);
  }

  .poster {
    max-width: 28rem;

    img {
      width: 100%;
    }
  }

  .content {
    padding: 1rem;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .date {
        font-size: 1.2rem;
      }

      .ratings {
        font-size: 1.4rem;
        color: var(--yellow);
      }
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 2.4rem;
      gap: 1rem;

      h1 {
        font-size: 2.4rem;
      }
    }
    .description {
      font-size: 1.6rem;
    }
  }

  .actors {
    width: 100%;
    border-top: 1px solid var(--white);
    grid-column: 1 / -1;
    padding: 1rem 0;

    ul {
      list-style: none;

      li {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 1rem;
        padding: 1rem;
        border-bottom: 1px solid var(--yellow);

        .photo {
          --size: 5rem;
          width: var(--size);
          height: var(--size);

          img {
            border-radius: 50%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
            width: 100%;
          }
        }

        .name {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
