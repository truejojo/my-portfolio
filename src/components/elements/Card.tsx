import Headline3 from "../assets/Headline3";
import List from "./List";
import { TListElementProps } from "../assets/ListElement";

export type TCardProps = {
  id: number;
  title: string;
  items: TListElementProps[];
  bgName: string;
};

const Card = ({ title, items, bgName }: TCardProps) => (
  <div className={`card | ${bgName}-300`}>
    <Headline3>{title}</Headline3>
    <List items={items} bg={`${bgName}-700`} />
  </div>
);

export default Card;