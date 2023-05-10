
import Card from "../elements/Card";
import { TListElementProps } from "../assets/ListElement";

export type TCardListProps = {
  id: number;
  title: string;
  items: TListElementProps[];
};

type TCardWrapperProps = {
  cardsList: TCardListProps[];
  bgName?: string;
};

const CardWrapper = ({ cardsList, bgName = "" }: TCardWrapperProps) => {
  return (
    <>
      {cardsList.map((card) => (
        <Card key={card.id} {...card} bgName={bgName} />
      ))}
    </>
  );
};

export default CardWrapper;
