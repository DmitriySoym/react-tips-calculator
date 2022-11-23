import React from "react";

export interface IInput {
  placeholder: string;
  value: string | undefined;
  onChange: any;
  name: string;
}

export interface IInputSelectValue {
  onChange: any;
  value: { value: string; label: string };
}

export interface IBaseStyle {
  media: {
    large: string;
    medium: string;
    small: string;
  };
}
