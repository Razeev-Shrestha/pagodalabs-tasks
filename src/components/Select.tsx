import { ComponentProps, FC } from "react";

type SelectOptionType = {
  type: string;
  value: string;
};

type SelectProps<T extends SelectOptionType> = {
  label?: string;
  name: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: T[];
} & ComponentProps<"select">;

export const Select: FC<SelectProps<SelectOptionType>> = ({
  id,
  name,
  onChange,
  value,
  options,
  ...selectProps
}) => {
  return (
    <div>
      {/* <label htmlFor={id}></label> */}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...selectProps}
      >
        {options.map((option) => (
          <option key={option.type} value={option.value}>
            {option.type}
          </option>
        ))}
      </select>
    </div>
  );
};
