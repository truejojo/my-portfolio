import { useState } from "react";

type TUseCounterProps = {
  initialCount?: number;
  step?: number;
};

const useCounter = ({ initialCount = 0, step = 1 }: TUseCounterProps = {}): [
  number,
  () => void,
  (value: number) => void
] => {
  const [count, setCount] = useState(initialCount);

  const increment = (): void => setCount((prevCount) => prevCount + step);

  const reset = (value: number = 0): void => setCount(value);

  return [count, increment, reset];
};

export default useCounter;
