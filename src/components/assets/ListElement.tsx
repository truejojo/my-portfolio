export type TListElementProps = {
  item: string;
};

const ListElement = ({ item }: TListElementProps) => <li>{item}</li>;

export default ListElement;
