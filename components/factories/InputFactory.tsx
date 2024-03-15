import React, { InputHTMLAttributes } from "react";
import { EfoodInput, InputProps } from "../ui/input";

type InputFactoryType = "input" | "select" | "textarea";

interface InputFactoryProps {
  type: InputFactoryType;
  inputProps: InputProps & { label: string };
}

const InputFactory = ({ type, inputProps }: InputFactoryProps) => {
  switch (type) {
    case "select":
      return <></>;
    case "textarea":
      return <></>;
    default:
      return <EfoodInput {...inputProps} />;
  }
};

export default InputFactory;
