import { _ } from "bemtv";

const { click$, $, css, template } = _`Counter`({ count: 0 });

click$(() => $.count++);

css`
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: #646cff;
  }

  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }

  @media (prefers-color-scheme: light) {
    & {
      background-color: #f9f9f9;
    }
  }
`;

template`button[id="counter" type="button" ~ Count is: $count]`;
