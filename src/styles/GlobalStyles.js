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

`;

export default GlobalStyle;
