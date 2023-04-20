import React from "react";

type TGameInputButtonProps = {
  value: string;
  ref: React.RefObject<HTMLInputElement>;
};

const GameInputButton = ({ value, ref }: TGameInputButtonProps) => (
  <input type="submit" value={value} className="button" ref={ref} />
);

export default GameInputButton;
