import Headline2 from "../assets/Headline2";

type THeaderElementProps = {
  title: string;
  subTitle?: string;
  classNames?: string;
};

const HeaderElement = ({
  title,
  subTitle = "",
  classNames = "",
}: THeaderElementProps) => (
  <header className={`section-header | ${classNames}`}>
    <Headline2>{title}</Headline2>
    {subTitle && <p>{subTitle}</p>}
  </header>
);

export default HeaderElement;
