import { ComponentProps, FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ComponentProps<"button">>;

export const Button: FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <button {...buttonProps}>{children}</button>;
};
