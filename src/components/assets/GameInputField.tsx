import React, { forwardRef } from "react";

type TGameInputFieldProps = {
  maxLength: number;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputWidth?: string;
};

const GameInputField = forwardRef<HTMLInputElement, TGameInputFieldProps>(
  (props, ref) => (
    <input
      type="text"
      className="fs-500 text-center mx-auto letter-spacing-default fw-bold"
      maxLength={props.maxLength}
      value={props.value}
      ref={ref}
      onChange={props.onChange}
      style={{ width: props.inputWidth }}
    />
  )
);

export default GameInputField;