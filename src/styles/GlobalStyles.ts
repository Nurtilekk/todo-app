import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Lato", sans-serif;
  }
  
  html,
  body,
  div,
  p,
  h1,
  ul {
    margin: 0;
    padding: 0;
  }
  
  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;  
  }
`;

export default GlobalStyle;
