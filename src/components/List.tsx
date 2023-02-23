import Item from "./Item";
import { IItemProps } from "./Item";
import { TAccent } from "./Section";

interface IListProps {
  items: IItemProps[];
  accent?: TAccent;
}

const List = ({ items, accent }: IListProps) => {
  return (
    <ul className={`flow fs-600 bg-accent-${accent}-500 p-24`} role="list">
      {items.length > 0 &&
        items.map((item) => <Item key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
