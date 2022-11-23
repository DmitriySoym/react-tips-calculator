import Select from "react-select";
import { customStyles } from "./style";
import { IInputSelectValue } from "../../types/types";
import { options } from "../Form/Form";

export const CustomSelect = ({ value, onChange }: IInputSelectValue) => {
  return (
    <Select
      options={options}
      styles={customStyles}
      isSearchable={false}
      value={value}
      onChange={onChange}
    />
  );
};
