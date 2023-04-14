import React from "react";

type THeadline1Props = {
  children: React.ReactNode;
};
const Headline1 = ({ children }: THeadline1Props) => {
  return <h1 className="title | fs-700">{children}</h1>;
};

export default Headline1;
