import React from "react";
import { ReactComponent as ButtonIcon } from "../../assets/buttonLogo.svg";
import { StyledButton } from "./styles";

export const Button = () => {
  return (
    <StyledButton>
      <ButtonIcon />
    </StyledButton>
  );
};
