import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
  margin: 0;
  font-family: sans-serif;
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


input:focus,
select:focus,
textarea:focus,
button:focus {
    outline: none;
}

.css-1okebmr-indicatorSeparator{
  display: none;
}
.css-tlfecz-indicatorContainer
{
  color: rgba(117, 108, 108, 1);
  transform: translateX(-50px) scale(1.5);
}
`;
