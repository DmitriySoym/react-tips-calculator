import styled from "styled-components";

const StyledButton = styled.button`
  width: 459px;
  height: 61px;
  border: none;
  background: #2ed2c9;
  cursor: pointer;
  transition: all 0.5s ease;

  &:disabled {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    max-width: 321px;
    width: 100%;
  }
`;

export { StyledButton };
