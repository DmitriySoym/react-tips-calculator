import { StylesConfig } from "react-select";

const customStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    boxShadow: "none",
    borderRadius: 35,
    maxWidth: window.innerWidth > 768 ? 456 : 332,
    height: 68,
    textAlign: "center",
    outline: "none",
    margin: "auto",
  }),

  option: (baseStyles, state) => ({
    ...baseStyles,
    textAlign: "center",
    color: "756C6C",
  }),

  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    position: "absolute",
    right: 40,
    top: 15,
  }),

  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    width: window.innerWidth > 768 ? 456 : 332,
  }),
};

export { customStyles };
