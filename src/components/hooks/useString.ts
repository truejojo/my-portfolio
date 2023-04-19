import { useState } from "react";

type TUseStringProps = {
  initialState?: string;
}

const useString = ({initialState = ""}: TUseStringProps = {}): [
  string,
  (newString: string) => void,
] => {
  const [state, setState] = useState(initialState);

  const setString = (newString: string) => setState(newString);

  return [state, setString];
};

export default useString;
