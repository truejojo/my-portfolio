export type TListElementProps = {
  id: number;
  item: string;
};

const ListElement = ({ item }: TListElementProps) => <li>{item}</li>;

export default ListElement;
