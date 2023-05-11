import Headline3 from "../assets/Headline3";
import ALinkButton from "../assets/ALinkButton";

export type TCardAccentProps = {
  title: string;
  text: string;
  linkTo: string;
  dataType: string;
  titleColor?: string;
};

const CardAccent = ({
  title,
  text,
  linkTo,
  dataType,
  titleColor,
}: TCardAccentProps) => {
  return (
    <div className="card | text-center">
      <Headline3 titleColor={titleColor}>{title}</Headline3>
      <p className="text">{text}</p>
      <ALinkButton linkTo={linkTo} dataType={dataType}>
        zum spiel
      </ALinkButton>
    </div>
  );
};

export default CardAccent;
