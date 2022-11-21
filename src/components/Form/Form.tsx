import React from "react";
import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Button } from "../Button/Button";
import { StyledForm, FormTitle, TotalBlock } from "./styles";
import { IInput } from "../../types/types";

export const Form = () => {
  const dataBillAmount: IInput = {
    name: "bill-amount",
    type: "number",
    placeholder: "Enter bill",
  };

  const dataPersons: IInput = {
    name: "persons",
    type: "number",
    placeholder: "Enter  persons",
  };

  return (
    <StyledForm>
      <FormTitle>Let’s go calculate your tips</FormTitle>
      <Input inputAttributes={dataBillAmount} />
      <Input inputAttributes={dataPersons} />
      <CustomSelect />
      <TotalBlock>Total: $ </TotalBlock>
      <Button />
    </StyledForm>
  );
};
