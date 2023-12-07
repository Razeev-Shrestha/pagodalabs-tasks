import { ComponentProps } from "react";

import "./Input.css";

type InputProps<T> = {
  label?: string;
  name: string;
  id: string;
  value: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & ComponentProps<"input">;

export const Input = <T,>({
  id,
  label,
  name,
  type = "text",
  ...inputProps
}: InputProps<T>) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} name={name} type={type} {...inputProps} />
    </div>
  );
};
