import Select, { ActionMeta } from "react-select";
import { IOption } from "../../types/types";
import { customStyles } from "./style";
import { options } from "../Form/Form";

interface IProps {
  onChange?: (newValue: unknown, actionMeta: ActionMeta<unknown>) => void;
  value: IOption;
}

export const CustomSelect = (props: IProps) => {
  return <Select options={options} isSearchable={false} styles={customStyles} {...props} />;
};
