import { useEffect } from "react";

type TGameFormProps = {
  children: React.ReactNode;
  classNames?: string;
};
const GameForm = ({ children, classNames }: TGameFormProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--flow-spacer", "2.5rem");
  }, []);

  return (
    <form
      className={`game-play-wrapper px-12 text-center ${classNames} box-shadow-2 border-radius`}
    >
      {children}
    </form>
  );
};

export default GameForm;
