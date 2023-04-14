import Headline1 from "../assets/Headline1";
import Headline2 from "../assets/Headline2";

type THeaderElementProps = {
  title: string;
  subTitle?: string;
  classNames?: string;
  isH1?: boolean;
};

const HeaderElement = ({
  title,
  subTitle = "",
  classNames = "",
  isH1 = false,
}: THeaderElementProps) => (
  <header className={`section-header | ${classNames}`}>
    {isH1 ? <Headline1>{title}</Headline1> : <Headline2>{title}</Headline2>}
    {subTitle && isH1 ? (
      <p className="subTitle | fs-500 mx-top-4">{subTitle}</p>
    ) : (
      <p className="subTitle">{subTitle}</p>
    )}
  </header>
);

export default HeaderElement;
