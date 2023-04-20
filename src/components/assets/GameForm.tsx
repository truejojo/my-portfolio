import { useEffect } from "react";

type TGameFormProps = {
  children: React.ReactNode;
  classNames?: string;
};
const GameForm = ({ children, classNames }: TGameFormProps) => {
  return (
    <form
      className={`game-form px-12 text-center ${classNames} box-shadow-2 border-radius`}
    >
      {children}
    </form>
  );
};

export default GameForm;
