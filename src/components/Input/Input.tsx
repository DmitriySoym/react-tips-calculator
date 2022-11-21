import React from "react";
import { IInput } from "../../types/types";
import { StyledInput } from "./styles";

interface IProps {
  inputAttributes: IInput;
}

export const Input = ({ inputAttributes }: IProps) => {
  return (
    <StyledInput
      type={inputAttributes.type}
      name={inputAttributes.name}
      placeholder={inputAttributes.placeholder}
    />
  );
};
