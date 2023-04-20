import React, { useEffect } from "react";

type TGameOutputProps = {
  children: React.ReactNode;
};

const GameOutput = ({ children }: TGameOutputProps) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--flow-spacer", "2.5rem");
  }, []);
  return <div className="fs-500 flow">{children}</div>;
};

export default GameOutput;
