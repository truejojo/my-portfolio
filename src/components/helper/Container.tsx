import { TypeProp } from "./types";

export const Container = ({ children }: TypeProp) => (
  <div className="container">{children}</div>
);

export const ContainerSmall = ({ children }: TypeProp) => (
  <div className="container" data-type="small">
    {children}
  </div>
);

export const ContainerWide = ({ children }: TypeProp) => (
  <div className="container" data-type="wide">
    {children}
  </div>
);

export const ContainerFullBleed = ({ children }: TypeProp) => (
  <div className="container" data-type="full-bleed">
    {children}
  </div>
);
