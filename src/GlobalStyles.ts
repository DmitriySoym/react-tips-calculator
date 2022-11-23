import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body{
  margin: 0;
  font-family: cursive;
  box-sizing: border-box;
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

/* .css-1gtu0rj-indicatorContainer{
  color: rgba(117, 108, 108, 1);
  transform: translateX(-50px) scale(1.5);
}

.css-tlfecz-indicatorContainer,
.css-tlfecz-indicatorContainer:focus{
  color: rgba(117, 108, 108, 1);
  transform: translateX(-50px) scale(1.5);
} */
`;
