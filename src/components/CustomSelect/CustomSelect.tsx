import React from "react";
import Select from "react-select";
import { inherits } from "util";

const options = [
  { value: "10%", label: "10%" },
  { value: "15%", label: "15%" },
  { value: "20%", label: "20%" },
];

export const CustomSelect = () => {
  return (
    <Select
      options={options}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borde: "none",
          borderRadius: 35,
          width: 456,
          height: 68,
          textAlign: "center",
          outline: "none",
        }),
      }}
    />
  );
};
