
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${ reset }
  * {
    font-family: "Pretendard", sans-serif !important;

  }

  html {
    height: 100vh;
  }

  body {
    height: 100%;
  }
`;

export default GlobalStyle;