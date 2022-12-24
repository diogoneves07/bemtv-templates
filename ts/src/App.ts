import { _ } from "bemtv";

import "./components/Counter";

const { css, template, render } = _`App`();

css`
  .logo {
    height: 12em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vanilla:hover {
    filter: drop-shadow(0 0 2em #3178c6aa);
  }

  .logo.vite {
    height: 11em;
  }

  .card {
    padding: 2em;
  }

  .read-the-docs {
    color: #888;
  }
`;

template`
  div[
    a[
      href="https://github.com/diogoneves07/bemtvjs" target="_blank" ~

      img[src="/bemtv-logo.png" class="logo vanilla" alt="Bemtv logo"]]
    a[
      href="https://vitejs.dev" target="_blank" ~

      img[src="/vite.svg" class="logo vite" alt="Vite logo"]]

    h1[Bemtv + Vite]

    div[ 
      class="card" ~
     
      Counter[]]
    p[
      class="read-the-docs" ~
      Click on the Bemtv and Vite logos to learn more]]`;

render("#app");
