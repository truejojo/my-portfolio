export interface IItemProps {
  id: number;
  item: string;
}

const Item = ({ item }: IItemProps) => <li>{item}</li>;

export default Item;
