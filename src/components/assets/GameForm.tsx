import { useEffect } from "react";

type TGameFormProps = {
  isTrue: boolean;
  forTrue: string;
  forFalse: string;
  children: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
const GameForm = ({ isTrue, forTrue, forFalse, children, onSubmit }: TGameFormProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--flow-spacer", "2.5rem");
  }, []);

  return (
    <form
      style={{
        display: isTrue ? forTrue : forFalse,
      }}
      className="flow"
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
};

export default GameForm;
