import React, { forwardRef } from "react";

type TGameInputButtonProps = {
  value: string;
  // ref: React.RefObject<HTMLInputElement>;
};

const GameInputButton = forwardRef<HTMLInputElement, TGameInputButtonProps>(
  (props, ref) => (
    <input className="button" type="submit" value={props.value} ref={ref} />
  )
);

export default GameInputButton;
