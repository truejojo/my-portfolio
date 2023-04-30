import { useState } from "react";

type TUseToggleProps = {
  initialState?: boolean;
};

const useToggle = ({ initialState = true }: TUseToggleProps = {}): [
  boolean,
  () => void,
  (newState: boolean) => void
] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => setState(!state);

  const setToggle = (newState: boolean) => setState(newState);

  return [state, toggle, setToggle];
};

export default useToggle;
