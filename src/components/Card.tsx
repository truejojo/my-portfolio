import List from "./List";
import { IContentProps } from "./Section";

const Card = ({ subtitle, items }: IContentProps) => (
  <div className="card | bg-accent-1-300 box-shadow-5">
    <h3 className="fs-700 m-bottom-24">{subtitle}</h3>
    <List items={items} />
  </div>
);

export default Card;
