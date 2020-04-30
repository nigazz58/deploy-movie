import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {height: 100%;}

  body { 
    background: #000;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
  }

  a {
    &:link, &:visited {color:inherit; text-decoration:none;}
  }
`;

export default GlobalStyle;
