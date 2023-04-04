import { TypeProp } from "./types";

export const GridAutoFitColumns = ({ children }: TypeProp) => (
  <div className="grid-auto-fit-columns">{children}</div>
);

export const GridEvenColumns = ({ children }: TypeProp) => (
  <div className="grid-even-columns">{children}</div>
);
