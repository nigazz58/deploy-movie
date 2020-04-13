import { reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body { 
    background: #000;
    color: #fff;
    line-height: 1.5;
  }

  a {
    &:link, &:visited {color:inherit; text-decoration:none;}
  }
`;

export default GlobalStyle;
