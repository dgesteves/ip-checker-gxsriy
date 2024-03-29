import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark_gray};
    font-family: 'Rubik', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  input, button {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
`;

export default GlobalStyles;
