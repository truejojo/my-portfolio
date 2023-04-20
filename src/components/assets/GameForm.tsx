import React from "react";

type TGameFormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  classNames?: string;
};
const GameForm = ({ children, onSubmit, classNames }: TGameFormProps) => {
  return (
    <form
      onSubmit={onSubmit}
      className={`game-form | flow px-12 text-center ${classNames} box-shadow-2 border-radius`}
    >
      {children}
    </form>
  );
};

export default GameForm;
