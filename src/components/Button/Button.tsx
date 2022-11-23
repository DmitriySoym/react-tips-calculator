import { ReactComponent as ButtonIcon } from "../../assets/buttonLogo.svg";
import { StyledButton } from "./styles";

interface IProps {
  disabled: boolean;
}

export const Button = ({ disabled }: IProps) => {
  return (
    <StyledButton disabled={disabled} type="submit">
      <ButtonIcon />
    </StyledButton>
  );
};
