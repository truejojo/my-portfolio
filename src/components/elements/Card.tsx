import Headline3 from "../assets/Headline3";
import List from "./List";
import { TListElementProps } from "../assets/ListElement";

export type TCardProps = {
  // id: number;
  title: string;
  items: TListElementProps[];
  bg: string;
};

const Card = ({title, items, bg}: TCardProps) => (
  <div className={`card | ${bg}-300`}>
    <Headline3 title={title} />
    <List items={items} bg={`${bg}-700`} />
  </div>
);

export default Card;
