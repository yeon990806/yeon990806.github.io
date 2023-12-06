
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${ reset }
  * {
    font-family: "Pretendard", sans-serif;

  }

  html {
    height: 100vh;
    scroll-behavior: smooth;
  }

  body {
    height: 100%;
    background-color: #292f36;
  }

  #root {
    height: 100%;
  }

  main {
    height: 100%;

    .home-section {
      height: 100%;
      padding-top: 60px;
    }
  }
`;

export default GlobalStyle;