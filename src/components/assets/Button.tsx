import React from "react";

type TButtonProps = {
  dataType?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  dataType,
  disabled = false,
  type = "button",
  onClick,
  children = "zum Spiel",
  onKeyDown,
}: TButtonProps) => (
  <button
    className="button"
    type={type}
    data-type={dataType}
    disabled={disabled}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {children}
  </button>
);

export default Button;
