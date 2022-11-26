import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IProps {
  placeholder: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export const Input = ({ placeholder, value, onChange, name }: IProps) => {
  return (
    <StyledInput
      type="number"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};
