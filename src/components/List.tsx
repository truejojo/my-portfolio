import Item from "./Item";
import { IItemProps } from "./Item";

interface IListProps {
  items: IItemProps[];
}

const List = ({ items }: IListProps) => {
  return (
    <ul >
      {items.length > 0 &&
        items.map((item) => <Item key={item.id} {...item} />)}
    </ul>
  );
};

export default List;
