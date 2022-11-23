import { IInput } from "../../types/types";
import { StyledInput } from "./styles";

export const Input = ({ placeholder, value, onChange, name }: IInput) => {
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
