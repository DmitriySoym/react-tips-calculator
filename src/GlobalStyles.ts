import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
HTML{
  box-sizing: border-box;
}

*{
  box-sizing: inherit;
}

body{
  margin: 0;
  font-family: cursive;

  background: #eaf2f2;
}

h1, h2{
  font-weight: 400;
}

#root{
  overflow: hidden;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}

input:focus::-webkit-input-placeholder {
  color: transparent
}

input:focus:focus::-moz-placeholder {
  color: transparent
}

input:focus:focus:-moz-placeholder {
  color: transparent
}

input:focus:focus:-ms-input-placeholder {
  color: transparent
}

input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}
`;
