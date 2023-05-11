import Headline3 from "../assets/Headline3";
import List from "./List";

export type TCardProps = {
  title: string;
  items: string[];
  bgName: string;
};

const Card = ({ title, items, bgName }: TCardProps) => (
  <div className={`card | ${bgName}-300`}>
    <Headline3>{title}</Headline3>
    <List items={items} bg={`${bgName}-700`} />
  </div>
);

export default Card;
