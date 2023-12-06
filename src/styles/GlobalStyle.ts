
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${ reset }
  * {
    font-family: "Pretendard", sans-serif;

  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
    background-color: #292f36;
  }
`;

export default GlobalStyle;