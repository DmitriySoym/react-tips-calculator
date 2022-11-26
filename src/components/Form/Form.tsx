import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { StyledForm, FormTitle, TotalBlock } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useState, useEffect, SetStateAction, FormEvent } from "react";
import { IOption } from "../../types/types";

export const options: IOption[] = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const Form = () => {
  const billAmmount = useInput();
  const personsAmount = useInput();
  const [total, setTotal] = useState(0);
  const [tips, setTips] = useState<IOption>(options[0]);
  const [buttonState, setButtonState] = useState(true);

  const handleChange = (newValue: IOption | null) => {
    if (newValue) {
      setTips(newValue);
    }
  };

  useEffect(() => {
    +billAmmount.value && +personsAmount.value ? setButtonState(false) : setButtonState(true);
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (+billAmmount.value <= 0 || +personsAmount.value <= 0) {
      return;
    }
    const total = (+billAmmount.value / +personsAmount.value) * (1 + +tips.label.slice(0, 2) / 100);
    setTotal(total);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormTitle>Let’s go calculate your tips</FormTitle>
      <Input placeholder="Enter bill" name="bill" {...billAmmount} />
      <Input placeholder="Enter persons" name="persons" {...personsAmount} />
      <CustomSelect value={tips} options={options} onChange={handleChange} />
      <TotalBlock>Total: {total.toFixed(2)}$ </TotalBlock>
      <Button isDisabled={buttonState} />
    </StyledForm>
  );
};
