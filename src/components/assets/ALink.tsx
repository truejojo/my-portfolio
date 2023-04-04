import React from "react";

type TALinkProps = {
  href: string;
  children: React.ReactNode;
};

const ALink = ({ href, children }: TALinkProps) => (
  <a target="_blank" href={`https://${href}`}>
    {children}
  </a>
);

export default ALink;
