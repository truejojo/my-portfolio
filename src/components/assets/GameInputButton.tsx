import { forwardRef } from "react";

type TGameInputButtonProps = {
  value: string;
};

const GameInputButton = forwardRef<HTMLInputElement, TGameInputButtonProps>(
  (props, ref) => (
    <input className="button | fs-400" type="submit" value={props.value} ref={ref} />
  )
);

export default GameInputButton;
