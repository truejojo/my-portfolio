import ListElement, { TListElementProps } from "../assets/ListElement";

type TListProps = {
  items: TListElementProps[];
  bg: string;
};

const List = ({ items, bg }: TListProps) => (
  <ul className={`list | flow ${bg}`} role="list">
    {items.length > 0 &&
      items.map((item) => <ListElement key={item.id} {...item} />)}
  </ul>
);

export default List;
