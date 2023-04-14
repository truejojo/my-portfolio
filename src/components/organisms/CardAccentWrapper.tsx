import CardAccent from "../elements/CardAccent";

type TCardAccentListProps = {
  id: number;
  title: string;
  text: string;
  linkTo: string;
};

type TCardAccentWrapperProps = {
  cardAccentList: TCardAccentListProps[];
};

const CardAccentWrapper = ({ cardAccentList }: TCardAccentWrapperProps) => (
  <>
    {cardAccentList.map((cardAccent, index) => (
      <CardAccent
        key={cardAccent.id}
        {...cardAccent}
        titleColor={`clr-secondary-${index + 1}-500`}
        dataType={`index-${index + 1}`}
      />
    ))}
  </>
);

export default CardAccentWrapper;
