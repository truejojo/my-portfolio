import List from "./List";
import { IItemProps } from "./Item";
import { TAccent } from "./Section";

export interface ICartProps {
  id: number;
  title: string;
  items: IItemProps[];
  accent?: TAccent;
}

const Card = ({ title, items, accent }: ICartProps) => (
  <div className={`card | bg-accent-${accent}-300 box-shadow-5`}>
    <h3 className="fs-700 m-bottom-24">{title}</h3>
    <List items={items} accent={accent} />
  </div>
);

export default Card;
