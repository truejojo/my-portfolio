import React from "react";

type TGamePlayWrapperProps = {
  children: React.ReactNode;
  bg?: string;
};

const GamePlayWrapper = ({ children, bg = "bg-primary-900" }: TGamePlayWrapperProps) => {
  return (
    <div className={`px-12 text-center ${bg} box-shadow-2 border-radius`}>
      {children}
    </div>
  );
};

export default GamePlayWrapper;
