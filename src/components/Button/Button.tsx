import { ReactComponent as ButtonIcon } from "../../assets/button-logo.svg";
import { StyledButton } from "./styles";

interface IProps {
  isDisabled: boolean;
}

export const Button = ({ isDisabled }: IProps) => {
  return (
    <StyledButton disabled={isDisabled} type="submit">
      <ButtonIcon />
    </StyledButton>
  );
};
