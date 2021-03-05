/* eslint-disable no-unused-vars */
import { createGlobalStyle } from "styled-components";

export const Globalstyle = createGlobalStyle`
  body {
    font-size: 16px;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    margin-block-end: initial;
    margin-block-start: initial;

    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, p {
    margin-block-start: 0;
    margin-block-end: 0;
    font-family: 'Roboto', sans-serif;
  }

  img {
    max-width: 100%;
  }

  a {
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
  }

  button {
    border: none;
  }

  #root {
  }

  .App {
    position: relative;
  }
`;

export const THEME = {
  Light: {},
  Dark: {},
};
