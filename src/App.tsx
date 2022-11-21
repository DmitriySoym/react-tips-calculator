import React from "react";
import { Form } from "../src/components/Form/Form";
import { Title, Container } from "./styles";
import { GlobalStyle } from "./GlobalStyles";

function App() {
  return (
    <Container>
      <Title>Welcome to App</Title>
      <Form />
      <GlobalStyle />
    </Container>
  );
}

export default App;
