import Item from "./Item";
import { IItemProps } from "./Item";

interface IListProps {
  items: IItemProps[];
}

const List = ({ items }: IListProps) => {
  return (
    <ul className="flow fs-600 bg-accent-1-500 p-24" role="list">
      {items.length > 0 &&
        items.map(item => <Item key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
