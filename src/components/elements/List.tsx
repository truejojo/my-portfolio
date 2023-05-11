import ListElement from "../assets/ListElement";

type TListProps = {
  items: string[];
  bg: string;
};

const List = ({ items, bg }: TListProps) => (
  <ul className={`list | flow ${bg}`} role="list">
    {items.length > 0 &&
      items.map((item, index) => <ListElement key={index} item={item} />)}
  </ul>
);

export default List;
