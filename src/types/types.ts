import { ChangeEvent } from "react";

export interface IInput {
  placeholder: string;
  value: string | undefined;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export interface IOption {
  value: string;
  label: string;
}
