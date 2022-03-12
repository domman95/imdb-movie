import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyle = createGlobalStyle`

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --black: #221E22;
    --white: #F4F2F2;
    --yellow: #F1D302;
    --borderRadius: 2.5rem;
  }

  html {
    font-size: 10px;
    font-family: sans-serif;
    color: var(--white);
  }

  body {
    background-color: var(--black) ;
  }

  .errorMessage {
    font-size: 1.4rem;
    margin: 0 2rem 1rem;
    padding: 1rem;
    border-radius: 0.4rem;
    background-color: red;
    width: 100%;
    max-width: 30rem;
  }

  .yellow {
    color: var(--yellow);
  }

  .link {
    color: var(--white);
    text-decoration: none;
  }
  
  .announcement {
    font-size: 1.6rem;
    margin-top: 2rem;
    color: var(--yellow);
  }

`;

export default GlobalStyle;
