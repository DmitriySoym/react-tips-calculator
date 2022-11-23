import { relative } from "path";
import { OptionProps, StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    boxShadow: "none",
    borderRadius: 35,
    width: 456,
    height: 68,
    textAlign: "center",
    outline: "none",
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    textAlign: "center",
    color: "756C6C",
  }),

  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
};

export { customStyles };
