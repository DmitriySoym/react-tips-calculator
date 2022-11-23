import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { StyledForm, FormTitle, TotalBlock } from "./styles";
import { useInput } from "../../hooks/useInput";
import { useState, useEffect } from "react";

export const options = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const Form = () => {
  const billAmmount = useInput();
  const personsAmount = useInput();
  const [total, setTotal] = useState(0);
  const [tips, setTips] = useState(options[0]);

  useEffect(() => {
    const btn = document.querySelector("button");

    if (+billAmmount.value > 0 && +personsAmount.value > 0) {
      btn?.removeAttribute("disabled");
    } else {
      btn?.setAttribute("disabled", "true");
    }
  }, [billAmmount.value, personsAmount.value]);

  const submit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (+billAmmount.value <= 0 || +personsAmount.value <= 0) {
      return;
    }
    const total = (+billAmmount.value / +personsAmount.value) * (1 + +tips.label.slice(0, 2) / 100);
    setTotal(total);
  };

  return (
    <StyledForm onSubmit={submit}>
      <FormTitle>Let’s go calculate your tips</FormTitle>
      <Input placeholder="Enter bill" name="bill" {...billAmmount} />
      <Input placeholder="Enter persons" name="persons" {...personsAmount} />
      <CustomSelect value={tips} onChange={setTips} />
      <TotalBlock>Total: {total.toFixed(2)}$ </TotalBlock>
      <Button disabled={true} />
    </StyledForm>
  );
};
