import React from "react";

type TGameOutputProps = {
  children: React.ReactNode;
};

const GameOutput = ({ children }: TGameOutputProps) => (
  <div className="fs-500">{children}</div>
);

export default GameOutput;
