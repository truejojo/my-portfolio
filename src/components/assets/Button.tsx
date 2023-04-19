import React from "react";

type TButtonProps = {
  dataType?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  children?: React.ReactNode;
  onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({
  dataType,
  type = "button",
  onClick,
  children = "zum Spiel",
  onKeyDown,
}: TButtonProps) => (
  <button
    className="button"
    type={type}
    data-type={dataType}
    onClick={onClick}
    onKeyDown={onKeyDown}
  >
    {children}
  </button>
);

export default Button;
