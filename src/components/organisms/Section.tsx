import React from "react";

type TSectionProps = {
  sectionName: string;
  children: React.ReactNode;
  bgNumber?: string;
  classNames?: string;
};

const Section = ({ children, sectionName, bgNumber, classNames = "" }: TSectionProps) => {
  return (
    <section
      id={sectionName}
      className={`${sectionName} | bg-primary-${bgNumber} ${classNames ? classNames : ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
